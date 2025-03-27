export default function About() {
    return (
        <div className="container text-left bg-primary-gradient">
            <div className="row align-items-start">
                <div className="col-12 col-md-4">
                    <img
                        src="/assets/JT.png"
                        alt="Jethro Thao"
                        className="mg-fluid img-thumbnail rounded bg-light my-5 d-block mx-auto d-md-inline-block float-md-start"
                        width="300"
                        height="300"
                    />
                </div>
                <div className="col-12 col-md-8">
                    <h3 className="text-secondary">Background</h3>
                    <p className="text-light">
                        I grew up in Saint Paul, Minnesota and having been living here my whole life. I attended the University of Minnesota and graduated with a bachelor's of science in Kinesiology, hoping to go into physical therapy. </p>

                    <p className="text-light">After taking some time off school, I decided to actually go into pharmacy to become a pharmacist. I then went back to a community college to finish up the rest of the prerequisite courses before applying to pharmacy school. Throughout that time, I worked as a pharmacy technician gaining a lot of experience and knowledge on what it was like to work in a pharmacy and by observing the pharmacist(s) and what they do. Through perserverance and hard work, I had gotten into pharmacy school. Sadly after working in a pharmacy for about 2-3 years, I realized pharmacy wasn't for me.</p>

                    <p className="text-light">And now here I am, trying to pursue and build a career in software development by taking this bootcamp course.</p>

                    <h3 className="text-secondary">Hobbies</h3>
                    <p className="text-light">
                        Whenever I can, I love to play sports, specifically soccer and volleyball. I also love to do cardio, whether that be running or jump roping. I'm a big outdoors person and I love spending quality time with my family and friends.
                    </p>
                </div>
            </div>
        </div>
    );
}