import createDataContext from './createDataContext';
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action)=>{
    switch (action.type) {
        case 'getblogpost':
            return action.payload;
        case 'editblogpost':
            return state.map((blogPost)=>{
                return blogPost.id===action.payload.id ? action.payload:blogPost;
            });
        case 'deleteblogpost':
            return state.filter(blogPost => blogPost.id !== action.payload);
        
        default:
            return state;
    }
}

const getBlogPost = (dispatch)=>{
    return async () => {
        const response = await jsonServer.get('/blogposts');
        dispatch({type:'getblogpost', payload:response.data});
    };
};

const addBlogPost = ()=>{
    return async (title, body, callback) => {
        await jsonServer.post('/blogposts', {title, body});
        
        if (callback) {
            callback();
        }
    };
}
const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`);

        dispatch({type: 'deleteblogpost', payload:id});
    };
}

const editBlogPost = (dispatch) => {
    return async (id, title, body, callback) => {

        await jsonServer.put(
            `/blogposts/${id}`,
            {title, body}
        );

        dispatch({type: 'editblogpost', payload:{id, title, body}});
        if (callback) {
            callback();
        }
    };
}


export const {Context, Provider} = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPost },
    []
);