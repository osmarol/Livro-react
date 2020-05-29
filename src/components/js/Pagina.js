import React, {Component} from 'react';
import Actions from './Actions';
import Button from './Button';
import Logo from './Logo';
import Suggest from './Suggest';
import Rating from './Rating';
import '../css/Logo.css';
import '../css/Button.css';

export default class Pagina extends Component {
    render() {
        return(    
            <div style={{padding:'20px'}}>
                
                <div style={{background: 'grey', width: '400px', height:'200px', paddingLeft:'100px', position: "relative", left:'0px'}}>
                    <h1>Componentes discovery</h1>                                    
                    <h2>Logo</h2>
                    <div style={{display: 'inline-block', background:'purple'}}><Logo/></div>
                </div> 
                
                <div style={{background: 'green', width: '400px', height: '200px', paddingLeft:'100px', position:'relative', left:'570px', marginTop:'-220px'}}>
                    <h2>Buttons</h2>
                    <div>Button with onClick: <Button onClick={() => alert('Graças a DEUS!')}>Click me</Button></div>
                    <div>A Link:<Button className="botao2" href="https://parteeletrica.com.br">Follow me</Button></div>
                    <div>Custom class name: <Button className="custom">I do nothing</Button></div> 
                </div>
                
                <div style={{background: 'TEAL', width: '400px', height:'200px', paddingLeft:'100px', position: "relative", left:'0px'}}>
                    <h2>Suggest</h2> 
                    <Suggest options={['JavaScript', 'React', 'React Native', 'Angular']}/>       
                </div>
               
                <div style={{background: 'red', width: '400px', height: '200px', paddingLeft:'100px', position:'relative', left:'570px', marginTop:'-220px'}}>
                    <h2>Actions</h2>
                    <Actions onAction={type => alert(type)}/>
                </div>

                <div style={{background: 'yellow', width: '400px', height:'200px', paddingLeft:'100px', position: "relative", left:'0px'}}>
                    <h2>Rating</h2>
                    <div>No initial value: <Rating /></div> 
                    <div>initial value 4: <Rating max={4} /></div>
                    <div>This one goes to 11: <Rating max={11} /></div>
                    <div>Read-only: <Rating readonly={true} defaultValue={3} /></div>
                </div>
            </div>   
        );
    }
}
