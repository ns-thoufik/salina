import React from 'react'
// import "./banner.css"
// import Styles from './App.module.css';

const banner = () => {
    return (
        <div>
            <div className='banner-container'>
                <div className='flex justify-between '>
                    {/* 1 */}
                    <div className='ml-[80px] mt-[100px]'>
                        <div>
                            <h2 className='text-[67px] text-white font-bold'>
                                Win Your<br />
                                Perfect Car Auction
                            </h2>
                        </div>
                        <div className='flex gap-4 mt-28'>
                            <div className='banner-content p-5 rounded-xl'>
                                <div className='flex'>
                                    <div className='bg-[#FFA920] w-[30px] h-[30px] rounded-full'><span className='font-bold ml-[10px]'>1</span></div>
                                    <h4 className='font-bold ml-3 text-[17px]'>Register</h4>
                                </div>
                                <p className='w-[200px] text-[14px] ml-11'>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                            </div>
                            <div className='banner-content p-5 rounded-xl'>
                                <div className='flex'>
                                    <div className='bg-[#FFA920] w-[30px] h-[30px] rounded-full'><span className='font-bold ml-[10px]'>2</span></div>
                                    <h4 className='font-bold ml-3 text-[17px]'>Find</h4>
                                </div>
                                <p className='w-[200px] text-[14px] ml-11'>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                            </div>
                            <div className='banner-content p-5 rounded-xl'>
                                <div className='flex'>
                                    <div className='bg-[#FFA920] w-[30px] h-[30px] rounded-full'><span className='font-bold ml-[10px]'>3</span></div>
                                    <h4 className='font-bold ml-3 text-[17px]'>Bid</h4>
                                </div>
                                <p className='w-[200px] text-[14px] ml-11'>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                            </div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className='parent mt-5 mr-[50px]'>
                        <div className='flex gap-4 text-center font-medium text-[15px]'>
                            <h6 className='custom-select-5'>All</h6>
                            <h6 className='custom-select-6'>Find</h6>
                            <h6 className='custom-select-5'>Quick Pick</h6>
                            <h6 className='custom-select-5'>Scan</h6>
                        </div>
                        <div className='bg-white w-[440px] px-[8px] py-6'>
                            <div className='flex gap-6 '>
                                <div>
                                    <select id="cars" name="cars" className='custom-select-1 '>
                                        <option value="volvo">Major</option>
                                        <option value="saab">Saab 95</option>
                                        <option value="mercedes">Mercedes SLK</option>
                                        <option value="audi">Audi TT</option>
                                    </select>
                                </div>
                                <div>
                                    <select id="cars" name="cars" className='custom-select-1'>
                                        <option value="volvo">Category</option>
                                        <option value="saab">Saab 95</option>
                                        <option value="mercedes">Mercedes SLK</option>
                                        <option value="audi">Audi TT</option>
                                    </select>
                                </div>
                            </div>
                            <div className='flex gap-6 text-center'>
                                <div>
                                    <select id="cars" name="cars" className='custom-select-1 mt-3'>
                                        <option value="volvo">Type</option>
                                        <option value="saab">Saab 95</option>
                                        <option value="mercedes">Mercedes SLK</option>
                                        <option value="audi">Audi TT</option>
                                    </select>
                                </div>
                                <div className='flex gap-2 '>
                                    <div>
                                        <select id="cars" name="cars" className='custom-select-2 mt-3'>
                                            <option value="volvo">Year</option>
                                            <option value="saab">Saab 95</option>
                                            <option value="mercedes">Mercedes SLK</option>
                                            <option value="audi">Audi TT</option>
                                        </select>
                                    </div>
                                    <div className='flex text-center'>
                                        <span className='mt-7'>To</span>
                                    </div>
                                    <div>
                                        <select id="cars" name="cars" className='custom-select-2 mt-3'>
                                            <option value="volvo">Year</option>
                                            <option value="saab">Saab 95</option>
                                            <option value="mercedes">Mercedes SLK</option>
                                            <option value="audi">Audi TT</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-6'>
                                <div>
                                    <select id="cars" name="cars" className='custom-select-1 mt-3'>
                                        <option value="volvo">Make</option>
                                        <option value="saab">Saab 95</option>
                                        <option value="mercedes">Mercedes SLK</option>
                                        <option value="audi">Audi TT</option>
                                    </select>
                                </div>
                                <div>
                                    <select id="cars" name="cars" className='custom-select-1 mt-3'>
                                        <option value="volvo">Model</option>
                                        <option value="saab">Saab 95</option>
                                        <option value="mercedes">Mercedes SLK</option>
                                        <option value="audi">Audi TT</option>
                                    </select>
                                </div>
                            </div>
                            <div className='flex gap-6'>
                                <div>
                                    <select id="cars" name="cars" className='custom-select-1 mt-3'>
                                        <option value="volvo">Location</option>
                                        <option value="saab">Saab 95</option>
                                        <option value="mercedes">Mercedes SLK</option>
                                        <option value="audi">Audi TT</option>
                                    </select>
                                </div>
                                <div>
                                    <select id="cars" name="cars" className='custom-select-1 mt-3'>
                                        <option value="volvo">Country</option>
                                        <option value="saab">Saab 95</option>
                                        <option value="mercedes">Mercedes SLK</option>
                                        <option value="audi">Audi TT</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div className='flex justify-end'>
                                    <select id="cars" name="cars" className='custom-select-3 mt-3'>
                                        <option value="volvo">Advance</option>
                                        <option value="saab">Saab 95</option>
                                        <option value="mercedes">Mercedes SLK</option>
                                        <option value="audi">Audi TT</option>
                                    </select>
                                </div>

                            </div>
                            <div className='flex gap-2'>
                                <div>
                                    <select id="cars" name="cars" className='custom-select-4 mt-3'>
                                        <option value="volvo"></option>
                                        <option value="saab">Saab 95</option>
                                        <option value="mercedes">Mercedes SLK</option>
                                        <option value="audi">Audi TT</option>
                                    </select>
                                </div>
                                <div>
                                    <select id="cars" name="cars" className='custom-select-4 mt-3'>
                                        <option value="volvo"></option>
                                        <option value="saab">Saab 95</option>
                                        <option value="mercedes">Mercedes SLK</option>
                                        <option value="audi">Audi TT</option>
                                    </select>
                                </div>
                                <div>
                                    <select id="cars" name="cars" className='custom-select-4 mt-3'>
                                        <option value="volvo"></option>
                                        <option value="saab">Saab 95</option>
                                        <option value="mercedes">Mercedes SLK</option>
                                        <option value="audi">Audi TT</option>
                                    </select>
                                </div>
                                <div>
                                    <select id="cars" name="cars" className='custom-select-4 mt-3'>
                                        <option value="volvo"></option>
                                        <option value="saab">Saab 95</option>
                                        <option value="mercedes">Mercedes SLK</option>
                                        <option value="audi">Audi TT</option>
                                    </select>
                                </div>

                            </div>
                            <div className='flex text-center gap-2 mt-3'>
                                <span className='custom-select-7'>Sort</span>
                                <span className='custom-select-7'>Stock Filter</span>
                                <span className='custom-select-7'>Sale Filter</span>
                                <span className='custom-select-7'>Map</span>

                            </div>

                        </div>
                        <div className='flex text-white justify-between mt-3'>
                            <span className='font-medium mt-4'>Short Keys</span>
                            <span className='bg-[#6e55ff] px-[60px] py-2 font-normal rounded-lg'>Search</span>
                        </div>
                        <div className='flex gap-2 mt-3  '>
                            <span className='bg-[#6e55ff]   text-white px-[22px] py-2 font-medium rounded-lg'>Inventory</span>
                            <span className='bg-white text-black px-[22px] py-2 font-medium rounded-lg'>Auction</span>
                            <span className='bg-white text-black px-[22px] py-2 font-medium rounded-lg'>Vendor</span>
                            <span className='bg-white text-black px-[22px] py-2 font-medium rounded-lg'>Location</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default banner