import { useState, useEffect, useCallback } from "react";
import { SlideNavigation } from "./SlideNavigation";

import { CoverSlide } from "./slides/CoverSlide";
import { AgendaSlide } from "./slides/AgendaSlide";

import { Module1DividerSlide } from "./slides/Module1DividerSlide";
import { ConceptIASlide } from "./slides/ConceptIASlide";
import { HistoryTimelineSlide } from "./slides/HistoryTimelineSlide";
import { BigDataSlide } from "./slides/BigDataSlide";
import { TransformersSlide } from "./slides/TransformersSlide";
import { ComputeGrowthSlide } from "./slides/ComputeGrowthSlide";
import { FoundationModelsSlide } from "./slides/FoundationModelsSlide";

import { Module2DividerSlide } from "./slides/Module2DividerSlide";
import { PromptEngineeringSlide } from "./slides/PromptEngineeringSlide";
import { PromptAnatomySlide } from "./slides/PromptAnatomySlide";
import { BadPromptResearchSlide } from "./slides/BadPromptResearchSlide";
import { GoodPromptResearchSlide } from "./slides/GoodPromptResearchSlide";
import { BadPromptMaterialSlide } from "./slides/BadPromptMaterialSlide";
import { GoodPromptMaterialSlide } from "./slides/GoodPromptMaterialSlide";
import { Activity1Slide } from "./slides/Activity1Slide";

import { Module3DividerSlide } from "./slides/Module3DividerSlide";
import { ToolsLandscapeSlide } from "./slides/ToolsLandscapeSlide";
import { ElicitSlide } from "./slides/ElicitSlide";
import { ResearchRabbitSlide } from "./slides/ResearchRabbitSlide";
import { SciSpaceSlide } from "./slides/SciSpaceSlide";
import { NotebookLMSlide } from "./slides/NotebookLMSlide";
import { DeepResearchSlide } from "./slides/DeepResearchSlide";
import { Activity2Slide } from "./slides/Activity2Slide";

import { Module4DividerSlide } from "./slides/Module4DividerSlide";
import { CanvasSlide } from "./slides/CanvasSlide";
import { GuideLearningSlide } from "./slides/GuideLearningSlide";
import { PortalEduIASlide } from "./slides/PortalEduIASlide";
import { Activity3Slide } from "./slides/Activity3Slide";

import { Module5DividerSlide } from "./slides/Module5DividerSlide";
import { AuthorshipSlide } from "./slides/AuthorshipSlide";
import { CabanacCaseSlide } from "./slides/CabanacCaseSlide";
import { ColonialismSlide } from "./slides/ColonialismSlide";
import { HypeCycleSlide } from "./slides/HypeCycleSlide";
import { LimitationsSlide } from "./slides/LimitationsSlide";
import { CollaborativeSlide } from "./slides/CollaborativeSlide";
import { JobsSlide } from "./slides/JobsSlide";

import { SynthesisSlide } from "./slides/SynthesisSlide";
import { ClosingSlide } from "./slides/ClosingSlide";

const slides = [
  CoverSlide,
  AgendaSlide,
  // Módulo 1
  Module1DividerSlide,
  ConceptIASlide,
  HistoryTimelineSlide,
  BigDataSlide,
  TransformersSlide,
  ComputeGrowthSlide,
  FoundationModelsSlide,
  // Módulo 2
  Module2DividerSlide,
  PromptEngineeringSlide,
  PromptAnatomySlide,
  BadPromptResearchSlide,
  GoodPromptResearchSlide,
  BadPromptMaterialSlide,
  GoodPromptMaterialSlide,
  Activity1Slide,
  // Módulo 3
  Module3DividerSlide,
  ToolsLandscapeSlide,
  ElicitSlide,
  ResearchRabbitSlide,
  SciSpaceSlide,
  NotebookLMSlide,
  DeepResearchSlide,
  Activity2Slide,
  // Módulo 4
  Module4DividerSlide,
  CanvasSlide,
  GuideLearningSlide,
  PortalEduIASlide,
  Activity3Slide,
  // Módulo 5
  Module5DividerSlide,
  AuthorshipSlide,
  CabanacCaseSlide,
  ColonialismSlide,
  HypeCycleSlide,
  LimitationsSlide,
  CollaborativeSlide,
  JobsSlide,
  // Encerramento
  SynthesisSlide,
  ClosingSlide,
];

export const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, []);

  const goToPreviousSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowRight":
        case " ":
        case "PageDown":
          event.preventDefault();
          goToNextSlide();
          break;
        case "ArrowLeft":
        case "PageUp":
          event.preventDefault();
          goToPreviousSlide();
          break;
        case "Home":
          event.preventDefault();
          setCurrentSlide(0);
          break;
        case "End":
          event.preventDefault();
          setCurrentSlide(slides.length - 1);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNextSlide, goToPreviousSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="min-h-screen bg-background">
      <div className="pb-20">
        <CurrentSlideComponent />
      </div>

      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrevious={goToPreviousSlide}
        onNext={goToNextSlide}
        onGoToSlide={goToSlide}
      />
    </div>
  );
};
