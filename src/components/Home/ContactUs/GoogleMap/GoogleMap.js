import React from 'react';

const GoogleMap = () => {

    return (
        <div>
            <iframe style={{ height: 500 }} className="w-100" title="google map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.231445576568!2d90.39092961498109!3d23.73912468459491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bff82557dd%3A0xafbdabca34b0b9ec!2sAziz%20Super%20Market%20Masjid!5e0!3m2!1sen!2sbd!4v1636757577648!5m2!1sen!2sbd">
            </iframe>

            {/* <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
        </div>
    );
};

export default GoogleMap;