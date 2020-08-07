import React , {Component} from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import TimeNow from './TimeNow';
import TimerNavigation from './Timer--navigation';
import {Circle} from 'react-shapes';
import { Icon } from 'react-icons-kit'
import {music} from 'react-icons-kit/metrize/music'
import {pause} from 'react-icons-kit/metrize/pause'
import {stop} from 'react-icons-kit/metrize/stop'
import {prevStep} from 'react-icons-kit/metrize/prevStep'







import styled from 'styled-components';



const Styles = styled.div`
.col-md-8{
    height:60vh;
    background-color:#D9D7D8;
    border-radius:18px;
    box-shadow:webkit-box-shadow: 0px 1px 37px -4px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 1px 37px -4px rgba(0,0,0,0.75);
    box-shadow: 0px 1px 37px -4px rgba(0,0,0,0.75);
    top:100px ;
    text-align:center;
    padding:0;  
}
.nav--container{
    display:flex;
   
    width:100%;
    height:10%   
}
.timer--container{
    display:flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:50%   
}
.music--container{
    display:flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:20%   
}
.buttons--container{
    display:flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:20%;
}
.navbar{
    width:100%;
    border-radius:18px;
}
.App-clock{
   margin-left:-158px
}
span{
    color:#ADADAD;
}
svg{
    m
}
`;
        
        
        
        class TimeBox extends Component {
            state = {  }
            render() { 
                return ( 
                    <Styles>
                    <Container>
                    <Row>
                    <Col className="align-middle" md={{ span: 8, offset: 2 }}> 
                   
                    <div className="nav--container"> <TimerNavigation/></div>
                    <div className="timer--container">
                    <Circle r={80} fill={{color:'transparent'}} stroke={{color:'#2E7FA4'}} strokeWidth={3}>
                    </Circle>
                    <TimeNow/>
                      
                        </div>
                    <div className="music--container"> <div style={{ color: '#7C7C7D' }}>
                    <Icon  style={{margin:'8px'}} size={35} icon={music} />
                     </div><span>  By The Sea Side</span></div>

                    <div className="buttons--container">
                    <div style={{ color: '#7C7C7D' }}>
                    <Icon size={35} icon={pause} />
                     </div>
                     <div style={{ color: '#7C7C7D', margin:'20px' }}>
                    <Icon size={35} icon={stop} />
                     </div>
            
                     <div style={{ color: '#7C7C7D' }}>
                     <Icon size={35} icon={prevStep} />
                     </div>
                    </div>
                    </Col>
                    </Row>
                    </Container>
                    </Styles>
                    );
                }
            }
            
            export default TimeBox;