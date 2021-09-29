import React from 'react';
import LastProductInDb from './LastProductInDb';
import CategoriesInDb from './CategoriesInDb';
import MainInfo from '../components/main-Info/MainInfo'

function ContentRowCenter(){
    return (
        <div className="row">
            <MainInfo/>
            {/*<!-- Last Product in DB -->*/}
            <LastProductInDb />
            {/*<!-- End content row last product in Data Base -->*/}
            
            {/*<!-- Categories in DB -->*/}
            <CategoriesInDb />

        </div>
    )
}

export default ContentRowCenter;