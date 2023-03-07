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
    const theScreenVIew = await analytics().logScreenView({
      screen_name: "screen_name ITEM",
      screen_class: "screen_class ITEM",
    });

    await analytics().logEvent(data.event_name, {
      date_event: data.date_event,
      element_actived: data.element_actived,
      app_instance_id: appInstanceId,
    });
    console.log('app_sc_home_cta_test_2 - APP ID - ', appInstanceId);
    console.log('app_sc_home_cta_test_2 - theScreenVIew - ', theScreenVIew);
  };

  return callGALogEvents;
};
