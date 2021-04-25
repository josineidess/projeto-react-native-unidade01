import axios from "axios";
import { useForceUpdate } from "../pages/comentarios/comentarios";

export async function getProdutos() {
  const produtos = await axios.get("http://192.168.0.106:3000/produtos");
  return produtos.data;
}

export async function getProduto(id) {
  const produtos = await axios.get("http://192.168.0.106:3000/produtos/" + id);
  return produtos.data;
}

export async function getComentarios(id) {
  const comentarios = await axios.get(
    "http://192.168.0.106:3000/produtos/" + id + "/comentarios"
  );
  return comentarios.data;
}

export async function cadastrarComentario(comentario, navigation) {
  const comentarios = await axios.post(
    "http://192.168.0.106:3000/produtos/" + id + "/comentarios",
    comentario
  );
  idComentario += 1;
  console.log("comentario postado");
  navigation.navigate("Comentarios");
  return comentarios.data;
}

export async function removerComentario(id, idcomentario, navigation) {
  console.log(id);
  const apagar = await axios.delete(
    "http://192.168.0.106:3000/produtos/" + id + "/comentarios/" + idcomentario
  );
  mudar_carregamento();
  navigation.navigate("Cadastro");
  alert("Comentario apagado!");
  console.log(idcomentario);
  return apagar.data;
}

const images = [
  "https://i.pinimg.com/736x/0c/01/7b/0c017bee36b4c555682025ea203acd2c.jpg",
  "https://static.wikia.nocookie.net/harrypotter/images/1/1a/Kenneth_Branagh_as_Gilderoy-Lockhart_%286%29.jpg/revision/latest?cb=20181009213748",
  "data:image/jpeg;base64,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",
  "https://pm1.narvii.com/6313/372a8ed8b61c14334bb87a09f4e129f6833d6dfe_hq.jpg",
  "https://uploads.spiritfanfiction.com/fanfics/historias/202012/como-conquistar-um-weasley-em-60-dias-21231765-121220202154.jpg",
  "https://s2.glbimg.com/2n5fLa5SF8TB0ydVt7L2ow6XSKA=/0x0:620x349/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/P/C/BNcRQ5Rt2mDd7ie5ABgg/harry-potter-dobby.jpg",
  "https://i.pinimg.com/originals/fa/16/6e/fa166ee361323806e6f70bafe57b48ef.jpg",
];

export function sortear_foto() {
  return images[sorteado];
}

export function pegar_carregamento() {
  return carregar;
}

export function mudar_carregamento() {
  carregar = !carregar;
}

var carregar = false;
var sorteado = 1;
var id = "1";
var idComentario = 15;

export function getId() {
  sorteado = Math.floor(Math.random() * 6);
  return id;
}

export function getIdComentario() {
  return String(idComentario);
}

export function mudarId(novo_id) {
  id = novo_id;
}

export function mudarIdComentario(novo_id) {
  idComentario = novo_id;
}
