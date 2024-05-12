import React from 'react'
// import Categories from '../../../assets/Categories.json'
import Subcategories from '../../../assets/SubCategories.json'
import ExtraTable from './ExtraTable'
import ExtraTableSubCategories from './ExtraTableSubCategories'
import './Extra.scss'
import Categories from './Categories'

const Extra = () => {
    return (
        <div>
            {/* <div className='Tables'>
                <div className='CategoryTable'>
                    <ExtraTable data={Categories} />
                </div>
                <div className="SubCategoryTable">
                    <ExtraTableSubCategories data={Subcategories} />
                </div>
            </div> */}
            <Categories />
        </div>
    )
}

export default Extra