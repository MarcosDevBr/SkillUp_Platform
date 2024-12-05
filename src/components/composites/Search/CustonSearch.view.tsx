import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import { RightIcon } from '../../../assets';
import { ICustonSearchViewProps } from './CustonSearch.model';
import { SysAntdInput } from './CustonSearch.style';

export default function CustonSearchView({
  placeholder = 'Busque por assuntos e aulas',
  defaultValue,
  onSearchChange,
  ...props
}: ICustonSearchViewProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const renderPrefix = () => (
    <div className="search-prefix">
      <FontAwesomeIcon 
        icon={faSearch} 
        size="lg" 
        className="search-prefix-search-icon"
       />
    </div>
  );

  const renderSuffix = () => (
    <div className="search-suffix">
      {isFocused ? (
        <FontAwesomeIcon
          icon={faClose} 
          size="sm" 
          className="search-suffix-close-icon" 
        />
      ) : (
        <img 
          src={RightIcon} 
          className="search-suffix-img" 
          alt="Icon"
          style={{ width: '100%', height: '100%' }}
         />
      )}
    </div>
  );

  return (
    <SysAntdInput
      {...props}
      type="search"
      onChange={(value) => onSearchChange(value)}
      defaultValue={defaultValue}
      className="header-search"
      placeholder={placeholder}
      prefix={renderPrefix()}
      suffix={renderSuffix()}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
}