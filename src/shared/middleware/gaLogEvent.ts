import analytics from '@react-native-firebase/analytics';

export type GALogEventsType = {
  event_name: string;
  date_event: Date;
  element_actived: string;
  app_instance_id: string;
};

export const GaLogEvents = (data: GALogEventsType) => {
  const callGALogEvents = async () => {
    console.log('1----- ', data);

    const appInstanceId = await analytics().getAppInstanceId();

    await analytics().logEvent(data.event_name, {
      date_event: data.date,
      element_actived: data.element_actived,
      app_instance_id: appInstanceId,
    });
    console.log('app_sc_home_cta_test_2 - APP ID - ', appInstanceId);
  };

  return callGALogEvents;
};
