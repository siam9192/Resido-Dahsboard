import axios from 'axios';
import React from 'react';
import { SlOptionsVertical } from 'react-icons/sl';
async function getReviews (){
    const res = await axios.get('http://localhost:3000/Json/Reviews.json');
    return res.data
   }
const RecentCustomers = async() => {
   const customers = await getReviews();
    return (
        <div className=" h-fit bg-color_main_light rounded-xl space-y-4 p-5">
    <div className="flex justify-between
     items-center">
       <h1 className="text-xl text-text_main font-semibold">Recent Joined</h1>
       <div className="text-white">
      <SlOptionsVertical></SlOptionsVertical>
       </div>
     </div>
     <div className="pt-3 space-y-6">
      {
       customers.slice(0,5).map((customer,index)=>{
        return <div className="flex justify-between items-center" key={index}>
        <div className="flex gap-2">
         <img src={customer.image} className="w-14 h-14 rounded-xl"/>
        <div className="space-y-1">
         <h1 className="text-xl text-text_main">{customer.name}</h1>
         <p>Joined {5*index} min ago</p>
        </div>

        </div>
        </div>
       }) 

      }
        <div>
            <button className="w-full py-3 bg-color_primary text-white rounded-xl">See More Customers</button>
        </div>
     </div>
    </div>
    );
}

export default RecentCustomers;
