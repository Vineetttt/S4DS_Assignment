import axios, { Axios } from 'axios';
import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import './Imagegallery.css'

export default function Imagegallery() {
    const [images, setImages] = useState([]);
    const inputRef = useRef(null);
    const varRef = useRef(images.length);

    useEffect(() => {
        // inputRef.current()
        axios.get("https://shibe.online/api/shibes?count=50")
        .then((res) => {
            // console.log(res);
            setImages(res.data)
            // console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[]);

    // useEffect(() => {
    //     varRef.current = varRef.current + 1;
    // })
    console.log(images)
    return(
        <div className='App'>
            <div>
                <ul>
                {
                    images.map(res => <img key={res.id} src={res}/>)
                }
                </ul>
            </div>
        </div>
    )
}