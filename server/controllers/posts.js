import PostMessage from '../models/postMessage';

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    console.log(postMessages);
  } catch (error) {

  }
}

export const createPost = (req, res) => {
  res.send('Post Creation');
}
