import React from "react";
import swal from "sweetalert";

function Gifts(props) {
  const miComponente = () => {
    swal({
      title: "estas seguro?",
      text: "una vez, comprado no se puede volver a retroceder",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((reclamar) => {
      if (reclamar) {
        swal("oh! compra exitosa", {
          icon: "success",
        });
        props.restar(props.puntos);
      } else {
        swal("No ha comprado nada");
      }
    });
  };

return (
    <div>
      <div className="columns">
        <div className="column">
          <div className="card-content">
            <div className="media-left">
              <figure className="image is-128x128">
                <img src={props.imagen} alt="card" />
              </figure>
              <br/>
              <h4>{props.puntos} pts</h4>
              <br/>
               <h5>{props.description}</h5>
              <button className="button is-primary" onClick={miComponente}>
                Reclama
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Gifts;
