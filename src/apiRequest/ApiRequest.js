import axios from "axios";

const baseURL = "https://basic-blog.teamrabbil.com/api";

export async function postCategories() {
  const res = await axios.get(`${baseURL}/post-categories`);
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
}
