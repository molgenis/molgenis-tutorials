import { Component } from 'vue-property-decorator'

type TutorialInfo = {
  infos: {
    path: string;
    description: string;
    title: string;
  };
}

export type MolgenisSlideShow = TutorialInfo & Component
