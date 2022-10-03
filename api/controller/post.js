import { bdd } from "../bdd.js";


export const getPosts = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM articles WHERE cat=?"
    : "SELECT * FROM articles";

  bdd.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  const q =
    "SELECT p.id, `pseudo`, `titre`, `description`, p.img, u.img AS userImg, `cat`,`creation` FROM utilisateurs u JOIN articles p ON u.id = p.uid WHERE p.id = ? ";

  bdd.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};
export const addPost = (req,res)=> {
    res.json("controller")
}
export const deletePost = (req,res)=> {
    res.json("controller")
}
export const updatePost = (req,res)=> {
    res.json("controller")
}