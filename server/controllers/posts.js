import PostMessage from '../models/postMessage';

export const getPosts = (req, res) => {
  try {
    const postMessages = PostMessage.find();
  } catch (error) {

  }
}

export const createPost = (req, res) => {
  res.send('Post Creation');
}
