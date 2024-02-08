import axios from "axios";
// import Rating from "react-rating";
import { IoMdStar } from "react-icons/io";
import { MdStarBorder } from "react-icons/md";
async function getReviews (){
 const res = await axios.get('http://localhost:3000/Json/Reviews.json');
 return res.data
}
const CustomerReviews = async() => {
    const reviews = await getReviews();
    return (
        <div className=" h-fit bg-color_main_light rounded-xl space-y-4 p-5">
    <div className="flex justify-between
     items-center">
       <h1 className="text-xl text-text_main font-semibold">Customer Review</h1>
     </div>
     <div className="pt-3 space-y-6">
        {
            reviews.slice(0,3).map((review,index)=>{
                return <div className="space-y-2">
                    <div className="flex justify-between items-center">
                       <div className="flex gap-2">
                        <img src={review.image} className="w-14 h-14 rounded-xl"/>
                       <div className="space-y-1">
                        <h1 className="text-xl text-text_main">{review.name}</h1>
                        <p>{5} min ago</p>
                       </div>

                       </div>
                     <div className="text-xl text-color_action_light">
                     {/* <Rating
  initialRating={3.5}
  emptySymbol={<MdStarBorder></MdStarBorder>}
  fullSymbol={<IoMdStar></IoMdStar>}
  readonly
/> */}
                     </div>
                    
                    </div>
                    <p>{review.review_text}</p>
                  
                </div>
            })
        }
     </div>
    </div>
    );
}

export default CustomerReviews;
