export interface StudentProps {
  introduction: string;
  role: `student`;
  username: string;
  achievements: string[];
  emoji: string;
  links: {
    site: string;
    facebook: string;
    github: string;
    linkedin: string;
    twitter: string;
  };
}
export const Student: React.FC<StudentProps> = (user) => {
  return (
    <div className="col-md-3 col-sm-3 js-student" data-username={user.username}>
      <div className="team-member">
        <div className="team-img">
          <img className="img-responsive js-avatar" src="" />
        </div>
        <div className="team-hover" onClick={void(0)}>
          <div className="desk">
            <h4>Hi There !</h4>
            <p>
              { user.introduction }
            </p>
            <h5>Achievements</h5>
            <ul>
              { user.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              )) }
            </ul>
          </div>
          <div className="s-link">
            <a href="https://github.com/{{ username }}"><i className="fa fa-github"></i></a>
            { user.links.site && <a href={user.links.site}><i className="fa fa-globe"></i></a> }
            { user.links.facebook && <a href={user.links.facebook}><i className="fa fa-facebook"></i></a> }
            { user.links.linkedin && <a href={user.links.linkedin}><i className="fa fa-linkedin"></i></a> }
            { user.links.twitter && <a href={user.links.twitter}><i className="fa fa-twitter"></i></a> }
          </div>
        </div>
      </div>
      <div className="team-title">
        <h5 className="js-name">.</h5>
        <span>{user.role}</span>
        <i className={`em em-${ user.emoji }`}></i>
      </div>
    </div>
  );
}