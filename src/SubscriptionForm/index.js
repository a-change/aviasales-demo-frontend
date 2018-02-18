import React from "react";
import {
  Border,
  SubscriptionForm,
  Description,
  Title,
  Note,
  Socials,
  SubscriptionElements
} from "./styles";
import Social from "./social";
import Form from "./form";
import vk from "./vk.svg";
import fb from "./fb.svg";
import tw from "./tw.svg";
import rss from "./rss.svg";
export default function() {
  return (
    <SubscriptionForm>
      <Border />
      <div className="container">
        <div className="row md-center">
          <div className="col-md-6 col-md-offset-3 col-xl-4 col-xl-offset-1">
            <Description>
              <Title>Хотите знать всё о скидках на авиабилеты?</Title>
              <Note>
                Вы можете подписаться на нашу рассылку через соцсети или по
                электронной почте.
              </Note>
            </Description>
          </div>

          <div className="col-md-8 col-md-offset-3 col-xl-5 col-xl-offset-0">
            <SubscriptionElements>
              <div className="col-xl-5 col-md-4 col-md-offset-2">
                <Socials>
                  <Social href="https://twitter.com" alt="Twitter" src={tw} />
                  <Social href="https://facebook.com" alt="Facebook" src={fb} />
                  <Social href="https://vk.com" alt="Vk" src={vk} />
                  <Social
                    href="https://your-rss.com"
                    alt="Your rss"
                    src={rss}
                  />
                </Socials>
              </div>
              <div className="col-xl-3 col-md-6">
                <Form />
              </div>
            </SubscriptionElements>
          </div>
        </div>
      </div>
    </SubscriptionForm>
  );
}
