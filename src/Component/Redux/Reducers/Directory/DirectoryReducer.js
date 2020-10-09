const { act } = require("react-dom/test-utils")

const initialState = {
    data : [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          size: 4,
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          size: 4,
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          size: 4,
          linkUrl: "shop/sneakers",
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: 6,
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: 6,
          id: 5,
          linkUrl: "shop/mens",
        },
      ]
}

const directoryReducer = (state=initialState,action)=>{
    switch(action.type){
        default : 
        return state
    }
}
export default directoryReducer