import "./QuestionDetails.css";
import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import Button from "../Common/Button/Button";
import Avatar from "../Avatar/Avatar";

const ques = {
  inquiryTitle: "איך אני יכול לאכול בלי להשמין?",
  inquiryText:
    "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - .לתכי מורגם בורק? לתיג ישבעס. ",
  dateSent: "16/03/2021 ",
  statusMessage: "לא רלוונטי",
  sender: "אברהם כהן",
  senderCity: "ירושלים",
  phone: "0522222222",
  senderImg:
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIREhUQEBIVFRASEBAWFRYVFRUQFhEVFxgWFhUWFRUYHSggGBolGxcXITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGC0lICAtLS0rNSstLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0rLS0tLS0tLS0tLS0tKy0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAAAwQCBwEFBgj/xABHEAABAwICBggCBwQHCQEAAAABAAIDBBEhMQUSE1FhgQYHFCJBcZGhMrFCUnKSorLBU2KC4QhDY6PC0fEjJCUzNGSD0vAW/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAEDBAIFBgf/xAApEQEBAAIBAwIFBAMAAAAAAAAAAQIRAwQSIQUxIjNBYXEGMkJRFCM0/9oADAMBAAIRAxEAPwDcSIiC7HkPILJYx5DyCyQVKjP0UakqM/RRoJ6Xx5Kwq9L48lYQRVGXNVVYrHgNLnEADEkmwAGZJOQWmenfXAGa1Poyzn4g1BAcxp/smnB5/eOHAoNl6c6R0tC0SVczYx4Am73/AGWDF3ILWPSPr2OLdH03/kqPmI2H5u5LTtdWyzvMs0jpJXHFzyXOPM+HBV0HqtK9Yulai+vWSNafoxWgA4DUAPqV5yprZZDeSWR53ve5/wAyoURLKOQtxa4g7wS0+y7nR/TDSEH/ACa2dvAyOePuvuF0iINn6A67a+EhtUyOpZ4m2wkzzu3un7oWz+jnWXo/SBaxkhhnOGymswk4/A6+q7kb8F8wog+ylLTZ8l839COtGqoS2KoLqikFhquN5Ih/ZvOY/dduwsvoHo1pmCsiFRTSB8ThmMC04Xa8ZtcNxRDuVhNkVmo5sigqIiIL6IiClLmfNYrKXM+axQEREFzZDcmyG5ZogpukN8/EptTvWL8z5lcILMTQRc4lZ7IbljT/AA+qlQV5u7a2F1HtTvUlV4c/0VOqqGxMdK82ZGxznHc1oJJ9Ag1P189LHNazRsTsXgST2P0L/wCzYfMgk+QWkV2PSDSz6ypmqpL600rnAH6LSe43yDbDkuvRIiIgIiICIiAiIgL1vVt0yfoypDi49llIbO3MWyEgH1m58RcLySIPsts5IBDrggEEYgg5EcFmx5JAJwK8H1OaaNVo2MON5KZzoHbyG2LCf4HNHIr3cPxBELOyG5NkNyzQoKW1O9c7V29YIgtMYCASMVlshuSLIeSzQYbIblwpEQVe0HgnaDwUSILAhBxxxxXPZxxUkeQ8gskFZzy3AZcVx2g8FxUZ+ijQTt7+fhuXi+uWp2GiagtJ1pdlEPJ72634Q5e0pfHkvD9elNr6IlcP6qWnf/eNZ/jQfMyIvQ9FuiM+kGTOgLQ6DZ9192iQu1sA7wIA8d/gotk90yb9nnkVnSFBLTvMU8bo5Bm141T5jeOIVZSOEXKEoOEuvZdFOrurrbSPGwpz9N4Os8f2bPHzNh5ra2ier7R0DQ3s7JXWxfMBK5x8j3RyAVWXLjisx4ssnzvdF9G6Q6CaOmFjSxsP1ohsXDm23utYdNOrWajaZ6YmanGLhb/axDeQMHN4j0THmxyMuLKPAouUVqtuL+jpV3lq6YnAxxSgfZJY4/iat4OiDcRmF88f0fZLaUePrUUw/vIXfovoqbIohD2g8E7QeCiRBZ7ON5Ts44qZEFYyluAtYLjtB4LCXM+axQS9oPBFEiCbs53p2c71ZRBAJ7YWywTtA3KB+Z8yuEE5Zrd7JcdnO9SU/wAPqpUFcdzPG68/1hs22jKyMC5NLKR5tGuPyr0FV4c/0VKthEkb4ziHxvaeIc0g/NB8dAreXUtQ7OgdKRjPO9w+w0NY33a481o98ZaS0jvNJaRxBsR6r6a6K6P7NR08HjHBGHfaIu73JVHPfh0u4Z8W0+l9D09WzZ1MTZGfvDFvFrhi08QVr/S3U/C4l1LUPjv9F42rR5G4d63WzkWbHPLH2rTlhjl7tMDqdqr27TDq79V9/T+a9X0X6sKalcJZ3GomaQW6w1I2neGXOt/F6L3iLq8uV+rmcWMERFWsEREGiOtno02kqRNCzVgqATYZMlGL2jcDcOA814ZfS3TDQDa+lkpzYPNnRu+pI3Fp8jiDwJXzbU0743ujkaWyMcWuac2uGBC28OfdGPlx1WwuoM/8UJ3Uc5/FGF9GGXW7ts18/f0fKcmtqJfBlHq83yRn5Rlb8h+IK1Uz7Od6dnO9WUKCDtA3J2gbiq6IJjFrY707Od6miyHks0Fbs53orKII9s3f7FNs3f7FVEQSGInEDA+SbF275KzHkPILJBDG8NFjgVltm7/YqCoz9FGgnl73w425fNdVXSua7VvawGXFdrS+PJddpmOzg7wIt6Krm32+FvFru8tCdPOiPZa+GaNv+7VVVHfxEcjpAXt8jckcx4LdhVDTOjm1ERicPpMe0/Vexwew+o9Lq8Vlyz7pGnHDttERFw7EREBERAREQFrHrm6PwbHtzWEVO0jjcW5SA3A1m+LhlfPILZyoaW0a2o2QfiyOdkpH1iwEtH3rHkusMu27c549006Tq86LDR9Pj/1Mwa6Y3yIvqsHBtzzuth0BJa15yxx8rhdMvQQx6sQbub/NX8OVyytqjmkmMkS7Zu/2KbZu/wBiqiLSzs9i7d8k2Lt3yVxEETJABYnELnbN3+xVaXM+axQW9s3f7FFURBzqncmqVeRBgw4DyCy1gqT8z5lcIJZxj6KPVO5Wab4fVSoK9Nhe/BKuEPaW+Ph5pVeHP9FAos3NJl06Z7SCQcwuF276YPw8bYFdSRbA5hYuTj7K2cecyjhERVrBERAREQEREBEVykpQ5us6/wAVhxXWONyuo5yymM3XGjqfXdc/C048TuXdSnAqm1oGAGCkh+ILbx4dk0x55912x1TuTVKvLgrtwawTWCoogzlGJ81jqncrcWQ8lmgo2RXkQEVLXO8+qa53n1QcPzPmVwrbGCwwGW5Zag3D0QYU/wAPqpVVmNjYYDhgsNc7z6oJarw5/ooFPT43vjlniptmNw9EFenz5KhpensdcZOz812cwsLjA8MFVkGsCCTYrjkw7pp3hl23bpkWcsZabH/VYLBZrw2y7ERESIiICIiDKJhcQ0ZkrvXxBrA0ZD/JUKCG3e8TlwC7CDE444eOK18OGpusnNnu6QrOH4grWzG4eiwkaACQMVepSoVS1zvPqmud59UGKK7sxuHomoNw9EHEWQ8lmqcjiCQCbLjXO8+qC6ipa53n1RBiitbAJsAgzjyHkFkqplIw3LjblAqM/RRqwxmsLnNZbAIMKXx5Kwq8ncy8eaw25QTVGXNVVMxxcbHJSbAIOurWAtJObQT6Lq2OBFxku9r4gInn9x3yK8hFKW5eix9R4sbOnm8a7NFHFMHZZ7lIqFoiIpBTUTQ5xB+iASuvnqvBvqr3RlgLn3+q35ldcernI55JZha7ZS02fJS7ALGQauI/zXoMCdYTZFV9uVy2QuNjkUESK1sAmwCCVFU25TbnggxlzPmsVZbECLnMrnYBBVRWtgEQSoq/aeHunaeHughfmfMrhT7C+N88ck7Nx9kGdP8AD6qVV9pqd3P2TtPD3QKrw5/ooFM462J7oG9dFpPpVQU9xLVxaw+i07R33WXKI3p3lP8AFyVlzgMTktZV/W5SR37PFLMfC9oGnmbuH3VN0Z6cP0ltGvjbEYy0hrXF+s03xJIF7Ebty67b7omct09VpLSGv3W/B+b+S6KePVPBXVhIy4sqOXj7591/DydmX2UVPHVOGePmoXC2BXC8/wBnpeKsmsO4KF8pdmVgiEkgAuxoXGIhzTj48eCr0sX0jyVlbODj18VYuo5d/DHpKKrbILjAjMbv5LOqyHmvLuq9iDLewY1zieAFyvH0XXHrYVFJYX+KKS5+48D83Japjb7Mdyk92z1nD8QXk9HdYmjZsDUGJ26VjmD72Lfdeoo6mKQbSGVkjf3HNeDzBKWWJlldghVftPD3TtPD3UJQIp+zcfZOzcfZBLFkPJZqvttXC2Sdp4e6Cwir9p4e6IIEUmwKbAoLMeQ8gjngC5NgMycAFS0hpSKmidNM8Mjjbdzj4eFhvJOFloTp11gT6Qc6OMmKjBwYMHSi+DpT4/ZyHFdY42ucspGxelHWjR07nMgvUyDA6h1Y2njIfi/huvAaS609IS3EZjhafqM1nD+J9/kvDhFbMJFFztXtIaZqai+3qJpL5h8ji37t7DkFTiFsliso8125Sr0XQHSGxrY7mzZbxu/i+H8QC86uWuIN2mxBBB3EZFLNwl1dvoZFT0RXCogjnH9ZG13kfEet1cWVrQ1MVxcZj3VRdiqlRFY3GRWTqOP+UbOm5f41CpIY9Y8FGBfBX42WFlVw8fdfst5+Tsnj3ZBcoi9B5zyvWRpDZUbmA2dO5sY+z8T/AGFua1CvZdaGkNpUthB7sEYv9t/ePtqrxq0YTUZuS7rh+Swgmcw60bnMdvY4sPqFm/JQrpy9Nozp9pGCwbUukA8JrTfid3vdev0J1vm4bWU4t4vhJw4mNx+RWqkXNxldTKx9U6C09T1se1ppWyN8bXDmnc5pxafMLsrr5Q0VpOalkE1PI6OQeLfEbnDJw4Fb56v+n8ekG7KUCOsY27mC+rIBa74+G9uY4jFVZYaW457eqlzPmsVK6InEZFcbArhYjRSbAogtrFzgLk4ADPcm0G8eq171ydJez0oponWlqtZpscWwjCQ87hvMqZN3SLdTbXPWV0uNfOY4j/ukL3Bg/auyMh38OHmvGoi0SaZrd3YiIpQLKPNYrKPNBKiIiG0OqzSGvA+AnGJ9x9h+P5gfVe3WnOr7SGxrWAmzZgYj5usW/iAHNbjVGc1Wnju45WLwCDfL5cVJHGXGw/0Wo+m/SWollkpiDFFHI5hYDi8tNrvd4g5gDDHxVHLnMJ5b+i6TPqc9Y3WvdsrRVXFKHOikZJquLTqkO1SN67BaC0dpGWneJIXljx4jIjcRkRwK3R0U0jJV0rah8eoS5wwNw4NNtcDwF7+ir4OSWdsjV6l6flwfHvcrtVhNKGNc92DWtLidwAufZZLzHWLpHY0bmg96ZwjHkcX/AIQfVaZN15FuptqfSFWZpZJnZySPf5axuByFhyVdEWlkcPyUKmfkoUBEREimpKl8T2yxOLZI3BzXDNpHioUQfS/QHpQ3SNK2XBszO5MwfRePEfukYj+S9Kvm3q26RmhrWOcbQTFsUo8AHGzXn7Jx8iV9HiQbx6hZ8pqtGGW4zRY7Qbx6ouXakvnbrD0v2qvmeDeON2yj3BsfdJ5u1jzC31p6v7PTTz/soZHjza0ke9l8w3PjifHifFW8c+qrlv0ERFapEREBcg2XCIJBIs1EwKVEMo5C0hzTZzSCDuINx7r6C0HIKmGOcYNkY13MjEetwvntbh6n9Ja9K+nJ70EhIH7khLvzayr5J42t4r5094xgAsMlp3rfpWMrGPb8csDXPHEEtDuYHstyLSPWvPr6QcP2cMTPm/8AxLD1P7Hveiy/5Pj+q8c7JfSui6VkMMcUX/LZG0N4gDPnnzXzUV9GdGKja0lPJ9aniP4QP0VXS+9b/XpezC/TdWp6UHFuB9itPdaddr1LYPCBmP232J/CG+q3PNKGNL3GzWtLidwAuT7L5v0vXGonlndnLI93kCe6OQsOS9Hjnnb5TlvjSmuHOsuVjIFcoYuf4LBERIiIgIiIC+jegWlu1UEEpN3hmzf9uPuE87A8185Lb3UbXXiqac/1ckUg8pA5ptzj91XnPDvjvls9ERUtDy/XDWiLRkgwvNJFEONzrO/Cx3ovnpbg6/K3u0tPvfLKf4QGD87vdafV+E8M/JfiERF24EREBEREJIlmommylQF67qv0nsK9jSe5O0xH7RxZ+IW/iXkVJBMWObI34mPa5vBzSHD3ASzcTLq7fTa+e+mtRtK+qd/3D2/c7n+Fb50bXNmgjqG/DJE1/qLkcsRyXzlWzbSR8n15JHfecT+q8vqr4kfU+g47zzy+yBb16sp9fR0O9hlZ6Pdb2IWiluDqbqL0ssZ+hUEjgHMafmCqumus2/1rDfT7/qx2fWdpLYUEjQe9ORCPJ19f8IPqtGL3/XDpPXqY6YHCCPWcP35LH8ob6rwC9fCaj4nku6IiwkPgunCNEREiIiAiIgLZPUVUhtbNF+0pr/ceP/da2Xruqip2elKfc/as+8x1vcBc5eycfePoyw/+si5siztT58646/a6RLL3EEMTPIm8h/OF4ddr0rrNvW1M3g+okt5NOq32aF1S0yajLld0REUoEREBERECljKiXLTZBMiIg2r0C05/wqpYT36SOYj7L2ucz8WsOS1UF2Oi9KOgZPGPhqINmeHeBB9NYfxLr15XW/vj7D9PT/Tlfu4WyepqrDXVTHGzdnHJyaXBx5Aha2XYaJ0o6nE+re89LJDcG1g9zCT6NPqqOD5kej6pN9Ln+GGm9IGpqJag5yyOdyyaOTQByVJEXuPz4KhJWchUaJEREBERAREQF2XRqq2NZTSj6FTAeWuA72JXWrkOI7wzBuPMYhB9Y7R2/wBgi8F/+2i+uip7V/e0Y/M+ZWKIrlAiIgIiICIiIFyERBIzILJEQERF5nX/ALo+u/Tnys/yIiKjpvmx6Pq//Hn+HK4RF7T4BE/NYoiJEREBERAREQEREFlERQl//9k=",
  isIncoming: true,
  qna: [
    { q: "מה המחזור השנתי שלך?", a: "950K" },
    { q: "כמה עובדים אתה מעסיק?", a: " 4" },
  ],
};
const QuestionDetails = () => {
  const user = useContext(UserContext).user;
  const { name } = user;
  return (
    <div style={{ display: "flex", flexFlow: "column nowrap" }}>
      <div>חזרה</div>
      <div className="openingText">
        {name},<br /> יש שאלה,חשבנו שאתה בדיוק הבנאדם המתאים שיכול לעזור:
      </div>
      <div
        className="questionDetails"
        style={{ display: "flex", flexFlow: "column nowrap" }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar src={ques.senderImg} style={{ height: 50 }} />
          <span>{ques.sender}, </span>
          <span>{ques.senderCity}</span>
        </div>
        <div className="inquiryTitle">{ques.inquiryTitle}</div>
        <div className="inquiryText">{ques.inquiryText}</div>
        {ques.qna.map(({ q, a }) => (
          <div>
            <div className="question">{q}</div>
            <div className="anser">{a}</div>
          </div>
        ))}
      </div>
      <Button>אשמח לעזור</Button>
      <br />
      <a href="#">מצטער,הפעם לא אוכל לעזור</a>
    </div>
  );
};
export default QuestionDetails;
