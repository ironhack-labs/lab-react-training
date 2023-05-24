import { useState } from "react";
import profilesList from '../../data/berlin.json';



const FaceBook = () => {
    return (

        <table>
            <tbody>
                {
                    profilesList.map(({ firstName, lastName, country, img, isStudent }) => {
                        return (
                            <tr>
                                <td>
                                    <img src={img} alt={firstName} style={{ width: '200px' }} />
                                </td>
                                <td>
                                    {firstName} {lastName}
                                </td>
                                <td>
                                    {country}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )






}



export default FaceBook