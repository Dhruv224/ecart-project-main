import React, { useState } from 'react'
import styled from 'styled-components'

function ProductImage({image = [{url : ""}]}) {

    const [mainImg, setMainImg] = useState(image[0]);

    const Div = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 50px;

        .mini-imgs{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
        }

        img{
            width: 100px;
            height: 100px;
            object-fit: cover;
            cursor: pointer;
            border-radius: 10px;
            box-shadow: 0px 1px 5px black;
            transition: all 0.5s;
        }

        img:hover{
            transform: scale(1.08);
        }

        .main-img img{
            height: 300px;
            width: 300px;
        }

        @media (max-width: 600px){
            flex-direction: column-reverse;

            .mini-imgs{
                flex-direction: row;
                justify-content: space-around;
            }

            img{
                height: 70px;
                width: 70px;
            }
        }
    `
  return (
    <Div>
        <div className="mini-imgs">
            {
                image && image.map((currImg, index) => {
                    return(
                        <img src={currImg.url} alt={currImg.filename} className="img" onClick={() => setMainImg(currImg)} key={index}/>
                    )
                })
            }
        </div>

        <div className="main-img">
            <img src={mainImg.url} alt={mainImg.filename} />
        </div>
    </Div>
  )
}

export default ProductImage