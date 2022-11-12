
import { Footer } from 'flowbite-react';
import React from 'react';

const Footerl = () => {
    return (
        <div>
            

            <Footer container={true}>
                <Footer.Copyright
                    href="#"
                    by="Flowbite™"
                    year={2022}
                />
                <Footer.LinkGroup>
                    <Footer.Link href="#">
                        About
                    </Footer.Link>
                    <Footer.Link href="#">
                        Privacy Policy
                    </Footer.Link>
                    <Footer.Link href="#">
                        Licensing
                    </Footer.Link>
                    <Footer.Link href="#">
                        Contact
                    </Footer.Link>
                </Footer.LinkGroup>
            </Footer>

        </div>
    );
};

export default Footerl;