
import styles from "./Profile.module.css";


export const Profile = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        <img src="https://cdn2.iconfinder.com/data/icons/cartoon-avatars/128/Avatars_hipster-256.png" 
        alt=""
        width="100%"
        />
      </div>
      <div className="col-md-8">
        <h2 className={styles.id}>Id: <span>2</span></h2>
        <h2 className={styles.name}>Фамилия и имя: <span>Игорь Анреев</span></h2>
        <h2 className={styles.email}>E-mail: <span>igoryan@ty.tu</span></h2>
        <p style={{fontWeight: 700}}>Текст о себе</p>
      </div>
    </div>
  );
}