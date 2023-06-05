import React from 'react'
import { Link } from 'react-router-dom'
import "./Categories.scss"

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/13532889/pexels-photo-13532889.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
                <button>
                    <Link className="link" to='/products/1'>Sale</Link>
                </button>
            </div>
            <div className="row">
            <img src="https://images.pexels.com/photos/6019936/pexels-photo-6019936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <button>
                    <Link className="link" to='/products/1'>Woman</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/10669854/pexels-photo-10669854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                 <button>
                    <Link className="link" to='/products/1'> New Season</Link>
                </button>   
            </div>
        </div>
        <div className="col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src="https://images.pexels.com/photos/5990741/pexels-photo-5990741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <button>
                        <Link className="link" to='/products/1'>   Men</Link>
                    </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src="https://images.pexels.com/photos/7691385/pexels-photo-7691385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <button>
                        <Link className="link" to='/products/1'>Shoes</Link>
                    </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <img src="https://images.pexels.com/photos/4223655/pexels-photo-4223655.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                    <button>
                        <Link className="link" to='/products/1'>   Accessories</Link>
                    </button>
            </div>
        </div>
    </div>
  );
}

export default Categories;