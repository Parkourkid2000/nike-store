/* eslint-disable react/prop-types */
import { star } from "../assets/icons"

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img src={imgURL}
        width={120}
        height={120}
         alt="customer"
         className="rounded-full object-cover" />
         <p>
            {feedback}
         </p>
         <div className='mt-3 flex justify-center items-center gap-2.5'>
            <img src={star}
            width={24}
            height={24}
            className="object-contain m-0"
             alt="" />
             <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
      </div>
      <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>
        {customerName}
      </h3>
    </div>
  )
}

export default ReviewCard