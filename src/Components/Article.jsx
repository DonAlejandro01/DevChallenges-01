import './Article.css';

function Articulo({img,data,title,date}) {
  return (
    <article className="informacion">
      <img src={img} alt={data} />
      <div>
        <h2>{title}</h2>
        <p>{date}</p>
      </div>
    </article>
  );
}
export default Articulo;
