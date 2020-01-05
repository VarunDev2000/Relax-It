import React, { Component } from 'react'
import './static/Loading.css'
class Loading extends Component {

    render() {
        return (
            <div>   
                <div className="content">
                <div className="content__container">
                    <p className="content__container__text">
                    Hello
                    </p>
                    
                    <ul className="content__container__list">
                    <li className="content__container__list__item">World !</li>
                    <li className="content__container__list__item">Friend !</li>
                    <li className="content__container__list__item">Users !</li>
                    <li className="content__container__list__item">Everybody !</li>
                    </ul>
                </div>
                </div>
            </div>
        )
    }
}

export default Loading
