import React from 'react';
import './FaceRecognition.css';
const FaceRecognition = ({imageUrl,box,dmgInfo}) => {
    return (
        <div className ='center br3 faceRecognition pa4 shadow-5'>
            <div className ='relative mt2 targetImage'>
                <img id='inputImage' width ='500px' height='500px' src={imageUrl} alt=''/>
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.botRow, left: box.leftCol}}></div>
            </div>
            <div className ='demoGraphicInfos white'>
                <div className= 'dmgTable mb4'>
                    <table>
                        <thead>
                            <tr>
                                <th>Gender Appearance</th>
                                <th style={{textAlign: 'right'}}>Probability</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{dmgInfo.gender0}</td>
                                <td  style={{textAlign: 'right'}}>{dmgInfo.gender0P}</td>
                            </tr>
                            <tr>
                                <td>{dmgInfo.gender1}</td>
                                <td style={{textAlign: 'right'}}>{dmgInfo.gender1P}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className= 'dmgTable mb4'>
                    <table>
                        <thead>
                            <tr>
                                <th>Age Appearance</th>
                                <th style={{textAlign: 'right'}}>Probability</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{dmgInfo.age}</td>
                                <td style={{textAlign: 'right'}}>{dmgInfo.ageP}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className= 'dmgTable'>
                    <table>
                        <thead>
                            <tr>
                                <th>Multicultural Appearance</th>
                                <th style={{textAlign: 'right'}}>Probability</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{dmgInfo.mc0}</td>
                                <td style={{textAlign:'right'}}>{dmgInfo.mc0P}</td>
                            </tr>
                            <tr>
                                <td>{dmgInfo.mc1}</td>
                                <td style={{textAlign:'right'}}>{dmgInfo.mc1P}</td>
                            </tr>
                            <tr>
                                <td>{dmgInfo.mc2}</td>
                                <td style={{textAlign:'right'}}>{dmgInfo.mc2P}</td>
                            </tr>
                            <tr>
                                <td>{dmgInfo.mc3}</td>
                                <td style={{textAlign:'right'}}>{dmgInfo.mc3P}</td>
                            </tr>
                            <tr>
                                <td>{dmgInfo.mc4}</td>
                                <td style={{textAlign:'right'}}>{dmgInfo.mc4P}</td>
                            </tr>
                            <tr>
                                <td>{dmgInfo.mc5}</td>
                                <td style={{textAlign:'right'}}>{dmgInfo.mc5P}</td>
                            </tr>
                            <tr>
                                <td>{dmgInfo.mc6}</td>
                                <td style={{textAlign:'right'}}>{dmgInfo.mc6P}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    );
}

export default FaceRecognition;