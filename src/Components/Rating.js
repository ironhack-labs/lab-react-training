function Rating(props) {
    /// no se is hay una manera mas estética. 


    const num = Math.round(props.children)


    ////////////////////////7   V E R S I O N   1   C O N   I M A G E N E S ////////////
    //     const a = "https://icons.veryicon.com/png/o/miscellaneous/huihon_iconfont/star-83.png"
    //     const b = "https://icons.veryicon.com/png/o/photographic/ant-design-official-icon-library/star-72.png"
    //    let stars
    //     switch (num) {
    //         case 0:

    //             stars = [b, b, b, b, b]
    //             break
    //         case 1:
    //             stars = [a, b, b, b, b]
    //             break
    //         case 2:
    //             stars = [a, a, b, b, b]
    //             break
    //         case 3:
    //             stars = [a, a, a, b, b]
    //             break
    //         case 4:
    //             stars = [a, a, a, a, b]
    //             break
    //         case 5:
    //             stars = [a, a, a, a, a]
    //             break
    //     }
    //     return (
    //         <div>
    //             <img src={stars[0]} alt="" />
    //             <img src={stars[1]} alt="" />
    //             <img src={stars[2]} alt="" />
    //             <img src={stars[3]} alt="" />
    //             <img src={stars[4]} alt="" />
    //         </div>
    //     )



    ////////////////////////7   V E R S I O N   2   C O N    A S C I I  ////////////
    let stars

    switch (num) {
        case 0:
            stars = "☆☆☆☆☆"
            break
        case 1:
            stars = "★☆☆☆☆"
            break
        case 2:
            stars = "★★☆☆☆"
            break
        case 3:
            stars = "★★★☆☆"
            break
        case 4:
            stars = "★★★★☆"
            break
        case 5:
            stars = "★★★★★"
            break

    }
    return (

        <figure>
            {stars}
        </figure>

    )

}
export default Rating