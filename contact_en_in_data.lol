<form id="contact-form" action="https://formspree.io/f/mleozzaq" target="dummyframe" method="POST">
    <div class="container-fluid" style="width:100%">

        <div class="row project-rows" >
            <div class="col-xl-4">
                <div class="input-field">
                    <h3>Name<span style="color: red;">*</span></h3>
                    <input id="name" type="text" name="name" required=True>
                    <div class="eg">Example: Ponjikkara Keshavan</div>
                </div>
                <div class="input-field">
                    <h3>Email Address<span style="color: red;">*</span></h3>
                    <input id="email" type="email" name="_replyto" required=True>
                    <div class="eg">Example: ponjikkara@kalyanaraman.com</div>
                </div>
                <div class="input-field">
                    <h3>Phone<span style="color: red;">*</span></h3>
                    <input id="phone" type="tel" name="phone" required=True>
                    <div class="eg">Example: +91 987 654 3210</div>
                </div>
            </div>
            <div class="col-xl-1"></div>
            <div class="col-xl-4">
                <div class="input-field">
                    <h3>Message<span style="color: red;"></span></h3>
                    <textarea id="msg" style="height: 5em;" name="comment"></textarea>
                    <div class="eg">Example: Hi Sooryakiran!</div>
                </div>
                <input type="button" onclick="submit_form()" value="➤ Send"><span id="feedback" class="message">
                    Message Sent!
                </span>
                <input id="click-bait" type="submit" value="send" style="display: none;">
            </div>
            
        </div>
        
    </div>
    <div style="display: none;">
        <input type="text" id="city" name="city" value="UNK">
        <input type="text" id="country" name="country" value="UNK">
        <input type="text" id="connection" name="connection" value="UNK">
    </div>
</form>