<template>
      <div class="contact">
        <div class="contact-inner">
            <h1>Зв'язатися з нами:</h1>
          <div class="contact-container">
            <form
                action="https://formsubmit.co/vladikgavrilyuk02@gmail.com"
                class="contact-form"
                name="contact"
                method="POST"
            >
              <div>
                <label for="name">Ім'я: </label>
                <input type="text" name="name" placeholder="Paul"  required>
              </div>
              <div>
                <label for="email">Ел.пошта: </label>
                <input  type="email" name="email" placeholder="example@gmail.com" minlength="6"  required >
              </div>
              <div>
                <label for="subject">Тема: </label>
                <input type="text" name="subject" minlength="8"  required  >
              </div>
              <div>
                <label for="comment">Коментарій: </label>
                <textarea name="comment"  required></textarea>
              </div>
              <div>
                <button id="btn" type="submit">Відправити</button>
                <input type="hidden" name="_next" value="https://ukrainian-rp.netlify.app/successful">
              </div>
            </form>
          </div>
            <h1>Ми в соціальних мережах</h1>
          <div class="social-link">
            <a href="https://www.facebook.com/groups/ukrainianrp">
              <img alt="facebook" src="https://img.icons8.com/color/100/000000/facebook-new.png"/>
            </a>
            <a>
              <img alt="instagram" src="https://img.icons8.com/color/100/000000/instagram-new--v1.png"/>
            </a>
            <a>
              <img alt="tiktok" src="https://img.icons8.com/color/100/000000/tiktok--v1.png"/>
            </a>
          </div>
        </div>
      </div>
</template>

<style>
.contact {
  display: flex;
  border-radius: 20px;
  width: 100%;
  height: 95%;
  background: #09189a;
  margin: 20px;
}

.contact-inner {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  padding: 20px;
  width: 100%;
  overflow-y: auto;
}
.contact-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.contact-form input, .contact-form textarea {
  display: flex;
  background: #080c74;
  color: aliceblue;
  border-style: none;
  border-radius: 20px;
  margin: 20px 0;
  padding: 20px;
  width: 50vw;
  resize: vertical;
}

.contact-form label {
  font-weight: bold;
  color: #FCFF00;
}

.social-link {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
}

.social-link a {
  margin: 0 10px;
}

.social-link img {
  width: 4vw;
}

.social-link a:active {
  transform: translateY(3px);
  opacity: 0.8;
  transition: all .10s ;
}

@media screen and (max-width: 1440px) {
  .contact-form input, textarea {
    padding: 1.5vw;
  }
  .social-link img {
    width: 5vw;
  }
}
@media screen and (max-width: 988px) {
  .contact {
    background: none;
    margin: 0;
  }
}
</style>