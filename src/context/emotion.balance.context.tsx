import { createContext, useContext, useState } from 'react';

export interface ImproveTimelineIntf {
  startDate: string;
  endDate: string;
}

export interface ActivityIntf {
  nameActivity: string;
}

export interface NoteIntf {
  created: string;
  content: string;
}

export interface EmotionBalanceIntf {
  positiveRate: number;
  improveTimeline: ImproveTimelineIntf;
  choosingActivities: ActivityIntf[];
  notes: NoteIntf[];
}
type EmotionBalanceProvider = {
  setPositiveRate: (val: number) => void;
  getPositiveRate: () => number;
  setImproveTimeline: (val: ImproveTimelineIntf) => void;
  getImproveTimeline: () => ImproveTimelineIntf | undefined;
  setChoosingActivities: (val: ActivityIntf[]) => void;
  getChoosingActivities: () => ActivityIntf[] | undefined;
  setNotes: (val: NoteIntf[]) => void;
  getNotes: () => NoteIntf[] | undefined;
  getComprehensiveState: () => EmotionBalanceIntf;
};

interface EmotionBalanceProviderProps {
  children: React.ReactNode;
}

const EmotionBalanceContext = createContext<EmotionBalanceProvider>(
  {} as EmotionBalanceProvider,
);

const EmotionBalanceProvider = (props: EmotionBalanceProviderProps) => {
  const { children } = props;

  const [comprehensiveState, setComprehensiveState] =
    useState<EmotionBalanceIntf>({
      positiveRate: 0,
      improveTimeline: {
        startDate: '',
        endDate: '',
      },
      choosingActivities: [],
      notes: [],
    });

  const getComprehensiveState = () => {
    return comprehensiveState;
  };

  const setPositiveRate = (val: number) => {
    var modify_val: EmotionBalanceIntf = { ...comprehensiveState };
    modify_val.positiveRate = val;
    setComprehensiveState(modify_val);
  };

  const getPositiveRate = (): number => {
    var result = comprehensiveState.positiveRate;
    return result;
  };

  const setImproveTimeline = (val: ImproveTimelineIntf) => {};

  const getImproveTimeline = (): ImproveTimelineIntf | undefined => {
    var rst: ImproveTimelineIntf | undefined = undefined;
    return rst;
  };

  const setChoosingActivities = (val: ActivityIntf[]) => {};

  const getChoosingActivities = (): ActivityIntf[] | undefined => {
    var rst: ActivityIntf[] | undefined = undefined;
    return rst;
  };

  const setNotes = (val: NoteIntf[]) => {};

  const getNotes = (): NoteIntf[] | undefined => {
    const rst: NoteIntf[] | undefined = undefined;
    return rst;
  };

  return (
    <EmotionBalanceContext.Provider
      value={{
        setPositiveRate,
        getPositiveRate,
        setImproveTimeline,
        getImproveTimeline,
        setChoosingActivities,
        getChoosingActivities,
        setNotes,
        getNotes,
        getComprehensiveState,
      }}
    >
      {children}
    </EmotionBalanceContext.Provider>
  );
};

export { EmotionBalanceProvider, EmotionBalanceContext };
