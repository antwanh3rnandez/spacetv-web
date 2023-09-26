import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card"
import { TestimonialType } from "../../../interfaces/Testimoniales.interface"

interface TestimonialProps {
  testimonial: TestimonialType;
}

const Testimonial: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <>
    <div className="p-4 w-[100%] h-[100%]">
      <Card className="w-full h-[100%] bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
        <CardHeader className='flex flex-col items-center justify-center'>
            <div className='w-20 h-20 border-2 border-blueprimary rounded-full'>
                <img src={testimonial.pic}></img>
            </div>
            <CardTitle className="text-gray-500 mt-4 font-normal">{testimonial.author}</CardTitle>
        </CardHeader>
        <CardContent>
            <CardDescription className="text-gray-700"><em>" {testimonial.text} </em>"</CardDescription>
            <CardDescription className="text-gray-500 mt-4">{testimonial.age}</CardDescription>
        </CardContent>
      </Card>
    </div>
    
    </>
  );
};

export default Testimonial;

