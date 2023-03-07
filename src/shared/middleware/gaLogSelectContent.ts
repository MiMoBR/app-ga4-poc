import analytics from '@react-native-firebase/analytics';

export const GASelectContents = () => {
  const callGASelectContents = async () => {
    const appInstanceId = await analytics().getAppInstanceId();

    await analytics().logSelectContent({
      content_type: 'app_sc_home_cta_test_3',
      item_id: `App ID - ${appInstanceId}`,
    });
    console.log('app_sc_home_cta_test_3 - APP ID - ', appInstanceId);
  };

  return callGASelectContents;
};
