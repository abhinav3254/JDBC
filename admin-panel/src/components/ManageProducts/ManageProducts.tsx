import React from 'react'
import { TabView, TabPanel } from 'primereact/tabview';
import Nav from '../Dashboard/Nav';
import Brand from './Brands/Brand';
import Extra from './Extra/Extra';
import Categories from './Extra/Categories';

const ManageProducts = () => {
    return (
        <div>
            <Nav />
            <div className="card">
                <TabView>
                    <TabPanel header="Brands" leftIcon="pi pi-calendar mr-2">
                        <Brand />
                    </TabPanel>
                    <TabPanel header="Users" rightIcon="pi pi-user ml-2">
                        <p className="m-0">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                            ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                    </TabPanel>
                    <TabPanel header="Categories" leftIcon="pi pi-search mr-2" rightIcon="pi pi-cog ml-2">
                        <Categories />
                    </TabPanel>
                    <TabPanel header="Cloths" leftIcon="pi pi-search mr-2" rightIcon="pi pi-cog ml-2">
                        <p>cloths</p>
                    </TabPanel>
                    <TabPanel header="Extra" leftIcon="pi pi-search mr-2" rightIcon="pi pi-cog ml-2">
                        <Extra />
                        <p>occasion</p>
                        <p>product_dimensions</p>
                        <p>package_dimensions</p>
                    </TabPanel>
                </TabView>
            </div>
        </div>
    )
}

export default ManageProducts