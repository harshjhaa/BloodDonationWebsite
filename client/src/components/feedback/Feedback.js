import React from 'react';
// import './Feedback.scss'

const Feedback = () => {
    return (
        <div className="feedbackFormContainer">
            <h1 class="agile_head text-center">Rate Your Experience </h1>
            <form lass="w3layouts_main wrap">
                <h3>Please help us to serve you better by taking a couple of minutes. </h3>
                <ul class="agile_info_select">
                    <li><input type="radio" name="view" value="excellent" id="excellent" required />
                        <label for="excellent">excellent</label>
                        <div class="check w3"></div>
                    </li>
                    <li><input type="radio" name="view" value="good" id="good" />
                        <label for="good"> good</label>
                        <div class="check w3ls"></div>
                    </li>
                    <li><input type="radio" name="view" value="neutral" id="neutral" />
                        <label for="neutral">neutral</label>
                        <div class="check wthree"></div>
                    </li>
                    <li><input type="radio" name="view" value="poor" id="poor" />
                        <label for="poor">poor</label>
                        <div class="check w3_agileits"></div>
                    </li>
                </ul>
                <h2>If you have specific feedback, please write to us...</h2>
                <textarea placeholder="Additional comments" class="w3l_summary" name="comments" required=""></textarea>
                <input type="text" placeholder="Your Name (optional)" name="name" />
                <input type="email" placeholder="Your Email (optional)" name="email" />
                <input type="text" placeholder="Your Number (optional)" name="num" />
                <br></br>
                <center><input type="submit" value="submit Feedback" class="agileinfo" /></center>
            </form>
            <div class="agileits_copyright text-center">
                <p>© Mansi 2021 </p>
            </div>
        </div>
    );
};

export default Feedback;