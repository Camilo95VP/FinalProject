import React, { Component } from "react";
import Layout from "../Layout/Layout";
import mat from "../../Images/mat1.jpg";
import mat2 from "../../Images/mat2.jpg";
import mat3 from "../../Images/mat3.jpg";
import mat4 from "../../Images/mat4.jpg";
import mat5 from "../../Images/mat5.jpg";
import cabezarobot from "../../Images/cabezarobot.png";
import "./Review.css";
import swal from "sweetalert"

export default class Review extends Component {
  state = {
    score: 5000,
    answer1: 0,
            answer2: 0,
            answer3: 0,
            answer4: 0,
            answer5: 0,
            puntos: 0
}

valueToQuestion1 = (e) => {
  this.setState({
    answer1: Number(e.target.value)  
})
};
valueToQuestion2 = (e) => {
  this.setState({
    answer2: Number(e.target.value)  
})
};
valueToQuestion3 = (e) => {
  this.setState({
    answer3: Number(e.target.value) 
})
};

valueToQuestion4 = (e) => {
  this.setState({
    answer4: Number(e.target.value)  
})
};
valueToQuestion5 = (e) => {
  this.setState({
    answer5: Number(e.target.value)  
})
};
onClickSubmit = (e)  => {
  e.preventDefault();
  let x = this.state.answer1 + this.state.answer2 + this.state.answer3 + this.state.answer4 + this.state.answer5
  this.setState({puntos: x})
  const res = {
                answer1: this.state.answer1,
                answer2: this.state.answer2,
                answer3: this.state.answer3,
                answer4: this.state.answer4,
                answer5: this.state.answer5,
                puntos: this.state.puntos
              }
  console.log(res)
  e.target.reset()
  this.setState(() => this.initialState)
if (res.Object === null){
  swal({
        title: `Puntaje obtenido: 0 Puntos`,
    });
} else {
  this.setState({score:this.state.score+this.state.answer1 + this.state.answer2 + this.state.answer3 + this.state.answer4 + this.state.answer5})
  
  swal({
        title: `Puntaje obtenido:`, 
        text: `${this.state.answer1 + this.state.answer2 + this.state.answer3 + this.state.answer4 + this.state.answer5} Puntos`,
    })
}}

// sumar = (point) =>{
//   const {score} = this.state;
//   if(point < score){
//     this.setState({ score: score + point });
//     console.log(`sumamos: ${point} de ${score}`);
//   } else {
//     swal(`si no se sumo puntos`);
//   }
// };
 
render() {
    return (
      <div>
        <Layout score={this.state.score}>
        <h1 id="h1">Reto de Lógica</h1>
        <div className="panel-heading">
          <h4>En este reto mediremos tus conocimientos</h4>
          <h6>Esfuérzate y así ganarás muchos puntos</h6>
          <img src={cabezarobot} id="cabezarobot" alt="robot" />
          <form onSubmit ={this.onClickSubmit}>
            <section className="column">
              <img src={mat}/>
              <p>
                1. ¿Continua la serie?
              </p>
              <div className="field">
                <div className="control">
                  <label className="radio">
                    <input type="radio" name="question1" required value={0} onChange={this.valueToQuestion1}/>
                    78
                  </label>
                  <br />
                  <label className="radio">
                    <input type="radio" name="question1" required value={0} onChange={this.valueToQuestion1}/>
                    90
                  </label>
                  <br />
                  <label className="radio">
                    <input type="radio" name="question1" required value={0} onChange={this.valueToQuestion1}/>
                   20
                  </label>
                  <br />
                  <label className="radio">
                    <input type="radio" name="question1" required value={1000} onChange={this.valueToQuestion1}/>
                    80
                  </label>
                </div>
              </div>
              <img src={mat2}/>
              <p>
                2. ¿Cual es la respuesta correcta?
              </p>
              <div className="field">
                <div className="control">
                  <label className="radio">
                    <input type="radio" name="question2" required value={0} onChange={this.valueToQuestion2}/>
                    5
                  </label>
                  <br />
                  <label className="radio">
                    <input type="radio" name="question2" required value={0} onChange={this.valueToQuestion2}/>
                   16
                  </label>
                  <br />
                  <label className="radio">
                    <input type="radio" name="question2" required value={1000} onChange={this.valueToQuestion2} />
                    26
                  </label>
                  <br />
                  <label className="radio">
                    <input type="radio" name="question2" required value={0} onChange={this.valueToQuestion2}/>
                   50
                  </label>
                </div>
              </div>
              <img src={mat3}/>
              <p> 3. ¿ Escribe tu respuesta ?</p>
              <div className="field">
                <div className="control">
                  <label className="radio">
                    <input type="radio" name="question3" required value={0} onChange={this.valueToQuestion3}/>
                    14
                  </label>
                  <br />
                  <label className="radio">
                    <input type="radio" name="question3" required value={0} onChange={this.valueToQuestion3}/>
                12
                  </label>
                  <br />
                  <label className="radio">
                    <input type="radio" name="question3" required value={1000} onChange={this.valueToQuestion3}/>
                    16
                  </label>
                  <br />
                  <label className="radio">
                    <input type="radio" name="question3" required value={0} onChange={this.valueToQuestion3}/>
                   20
                  </label>
                </div>
              </div>
              <img src={mat4}/>
              <p>
                4. ¿cual es el valor de la ultima piedra?
              </p>
              <div className="control">
              <label className="radio">
                    <input type="radio" name="question4" required value={1000} onChange={this.valueToQuestion4}/>
                32
                </label>
                <br />
                <label className="radio">
                    <input type="radio" name="question4" required value={0} onChange={this.valueToQuestion4}/>
                40
                </label>
                <br />
                <label className="radio">
                    <input type="radio" name="question4" required value={0} onChange={this.valueToQuestion4}/>
                  27
                </label>
                <br />
                <label className="radio">
                    <input type="radio" name="question4" required value={0} onChange={this.valueToQuestion4}/>
                  31
                </label>
                <br />
              </div>
              <img src={mat5}/>
              <p>
                5. ¿En que posicion esta estacionado el coche?
              </p>
              <div className="field">
                <div className="control">
                  <label className="radio">
                    <input type="radio" name="question5" required value={0} onChange={this.valueToQuestion5}/>
                   89
                  </label>
                  <br />
                  <label className="radio">
                    <input type="radio" name="question5" required value={0} onChange={this.valueToQuestion5}/>
                 85
                  </label>
                  <br />
                  <label className="radio">
                    <input type="radio" name="question5" required value={1000} onChange={this.valueToQuestion5}/>
                    87
                  </label>
                  <br />
                  <label className="radio">
                    <input type="radio" name="question5" required value={0} onChange={this.valueToQuestion5}/>
                   90
                  </label>
                </div>
              </div>
              <div id="button">
                <button className="button is-primary" required>Enviar</button>
              </div>
            </section>
          </form>
        </div>
        </Layout>
      </div>
    );
  }
}
