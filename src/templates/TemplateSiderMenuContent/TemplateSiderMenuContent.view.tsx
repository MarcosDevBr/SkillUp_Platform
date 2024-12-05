import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ITemplateSiderMenuContentViewProps } from './TemplateSiderMenuContent.model';
import { Container, SOptionWrapper } from './TemplateSiderMenuContent.style';
import {  faHome } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons/faQuestionCircle';

export default function TemplateSiderMenuContentView({
  sider,
  content,
  showSider = true,
  mainMenuVisible = false,
  onclickHelp
}: ITemplateSiderMenuContentViewProps) {

  return (
    <Container>

      {
        showSider && (
          <div className={!mainMenuVisible ? 'TemplateSiderMenuContent-sider closed' : 'templateSiderMenuContent-sider'}>
            {
              sider.map((item) => (
                  <SOptionWrapper 
                    key={item.name} 
                    onClick={item.onClick} 
                    isSelect={item.isSelect}
                  >

                      <FontAwesomeIcon
                          icon={item.iconType || faHome} 
                          size="lg" 
                          className="templateSiderMenuContent-icon" 
                      />

                      <span>
                      {item.name}
                      </span>

                  </SOptionWrapper>
              ))
            }


              <div className="help-container">

                <div className="help-container-icon-plus-text" onClick={onclickHelp}>
                  <FontAwesomeIcon
                      icon={faQuestionCircle} 
                      size="lg" 
                      className="help-container-icon" 
                    />

                    <span>
                      Ajuda
                    </span>
                </div>
                  

                  <FontAwesomeIcon
                    icon={faArrowRight} 
                    size="lg" 
                    className="help-container-right" 
                  />

              </div>
          </div>

        )
      }
      
     <div className="templateSiderMenuContent-content">{content}</div>
    </Container>
  );
}
