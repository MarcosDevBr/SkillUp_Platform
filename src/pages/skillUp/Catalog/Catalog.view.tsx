import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "./Catalog.style";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { ICatalogViewProps } from "./Catalog.model";
import FilterCard from "../../../components/composites/FilterCard/FilterCard";
import VideoCard from "../../../components/composites/VideoCard/VideoCard";

const ITEMS_PER_PAGE = 10;

export default function CatalogView({
  arrFilters,
  data,
  onFilterByDate,
  onFilterClick
}: ICatalogViewProps) {
  const [currentPage] = useState(1);

  // const handleLoadMore = () => {
  //   setCurrentPage(prevPage => prevPage + 1);
  // };

  const displayedVideos = data?.slice(0, currentPage * ITEMS_PER_PAGE) || [];

  return (
    <Container>
      <div className="catalog-header">
        <h2 className="catalog-header-title">
          Veja o que vem 
        </h2>
        <h2 className="catalog-header-subtitle">
          Descubra as novidades da SkillUp Academy
        </h2>
      </div> 
      
      <div className="catalog-filter-container">
        <div className="catalog-filter-container-filter-cards">
          {arrFilters && arrFilters.map((item) => (
            <FilterCard
              key={item.id}
              text={item.identificador}
              isSelect={item.checked}
              onClick={() => onFilterClick(item.id)}
            />
          ))}
        </div>

        <div className="catalog-filter-container-date-filter" onClick={onFilterByDate}>
          <FontAwesomeIcon
            icon={faCalendar} 
            size="sm" 
            className="catalog-filter-container-date-filter-icon" 
          />
          <span>
            Filtrar por data
          </span>
        </div>
      </div>

      <div className="catalog-videos-container">
        {displayedVideos && displayedVideos.map((item, index) => (
          <VideoCard
            key={index}
            showEyeToVisualize={item.showEyeToVisualize}
            caminho={item.midia}
            onPressPrevArrow={item.handlePrev}
            showVideo={true}
            title={item.title}
            subTitle={item.subTitle}
          />
        ))}
        
      </div>
    </Container>
  );
}
