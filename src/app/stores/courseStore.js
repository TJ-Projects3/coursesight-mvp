import { create } from 'zustand';

const useCourseStore = create((set) => ({
  courses: [],
  loading: false,
  error: null,

  // Helper function for API calls
  fetchWithConfig: async (url, options = {}) => {
    const defaultOptions = {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      ...options,
    };

    const response = await fetch(url, defaultOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  },

  // Fetch all courses
  fetchCourses: async () => {
    set({ loading: true });
    try {
      const data = await useCourseStore.getState().fetchWithConfig(
        `${process.env.NEXT_PUBLIC_API_URL}/courses`
      );
      
      if (!data.success) {
        throw new Error(data.message);
      }
      
      set({ courses: data.data, loading: false, error: null });
    } catch (error) {
      console.error('Error fetching courses:', error);
      set({ error: error.message, loading: false });
    }
  },

  // Create a new course
  createCourse: async (courseData) => {
    set({ loading: true });
    try {
      const data = await useCourseStore.getState().fetchWithConfig(
        `${process.env.NEXT_PUBLIC_API_URL}/courses`,
        {
          method: 'POST',
          body: JSON.stringify(courseData),
        }
      );

      if (!data.success) {
        throw new Error(data.message);
      }

      set((state) => ({
        courses: [...state.courses, data.data],
        loading: false,
        error: null,
      }));
      return data.data;
    } catch (error) {
      console.error('Error creating course:', error);
      set({ error: error.message, loading: false });
      throw error;
    }
  },

  // Update a course
  updateCourse: async (id, courseData) => {
    set({ loading: true });
    try {
      const data = await useCourseStore.getState().fetchWithConfig(
        `${process.env.NEXT_PUBLIC_API_URL}/courses/${id}`,
        {
          method: 'PUT',
          body: JSON.stringify(courseData),
        }
      );

      if (!data.success) {
        throw new Error(data.message);
      }

      set((state) => ({
        courses: state.courses.map((course) => 
          course._id === id ? data.data : course
        ),
        loading: false,
        error: null,
      }));
      return data.data;
    } catch (error) {
      console.error('Error updating course:', error);
      set({ error: error.message, loading: false });
      throw error;
    }
  },

  // Delete a course
  deleteCourse: async (id) => {
    set({ loading: true });
    try {
      const data = await useCourseStore.getState().fetchWithConfig(
        `${process.env.NEXT_PUBLIC_API_URL}/courses/${id}`,
        {
          method: 'DELETE',
        }
      );

      if (!data.success) {
        throw new Error(data.message);
      }

      set((state) => ({
        courses: state.courses.filter((course) => course._id !== id),
        loading: false,
        error: null,
      }));
    } catch (error) {
      console.error('Error deleting course:', error);
      set({ error: error.message, loading: false });
      throw error;
    }
  },

  // Clear error
  clearError: () => set({ error: null }),

  // Add a comment to a course
  addComment: async (courseId, commentData) => {
    set({ loading: true });
    try {
      console.log('Sending comment data:', commentData); // For debugging
      const data = await useCourseStore.getState().fetchWithConfig(
        `${process.env.NEXT_PUBLIC_API_URL}/courses/${courseId}/comments`,
        {
          method: 'POST',
          body: JSON.stringify({
            text: commentData.text,
            createdAt: commentData.createdAt
          }),
        }
      );

      if (!data.success) {
        throw new Error(data.message);
      }

      // Update the local state with the new comment
      set((state) => ({
        courses: state.courses.map((course) => 
          course._id === courseId 
            ? { 
                ...course, 
                comments: [...(course.comments || []), data.data] 
              }
            : course
        ),
        loading: false,
        error: null,
      }));
      return data.data;
    } catch (error) {
      console.error('Error adding comment:', error);
      set({ error: error.message, loading: false });
      throw error;
    }
  },
}));

export default useCourseStore; 