import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';

import user from '../../assets/data/user.json';
import colors from './../../theme/colors';
import fonts from '../../theme/fonts';
import {useForm, Controller, Control} from 'react-hook-form';
import {IUser} from '../../types/models';
import {Asset} from './../../../node_modules/react-native-image-picker/src/types';

type IEditableUserField =
  | 'bio'
  | 'image'
  | 'name'
  | 'posts'
  | 'username'
  | 'website';
type IEditableUser = Pick<IUser, IEditableUserField>;

interface ICustomInput {
  label: string;
  multiLine?: boolean;
  control: Control<IEditableUser, object>;
  name: IEditableUserField;
  rules?: object;
}

const CustomInput = ({
  label,
  multiLine = false,
  name,
  control,
  rules = {},
}: ICustomInput) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({field: {onChange, value, onBlur}, fieldState: {error}}) => {
      console.log('field error :');
      console.log(error);
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          <View style={{flex: 1}}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              style={[
                styles.input,
                {borderColor: error ? colors.accent : colors.border},
              ]}
              multiline={multiLine}
              placeholder={label}
            />
            {error && <Text style={styles.error}>{error.message}</Text>}
          </View>
        </View>
      );
    }}
  />
);

const EditProfileScreen = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<null | Asset>(null);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IEditableUser>({
    defaultValues: {
      name: user.name,
      username: user.username,
      website: user.website,
      bio: user.bio,
    },
  });

  const onSubmit = (data: IEditableUser) => {
    console.log('submitted', data);
  };

  const onChangePhoto = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
      },
      ({didCancel, errorCode, errorMessage, assets}) => {
        if (!didCancel && !errorCode && assets && assets.length > 0) {
          setSelectedPhoto(assets[0]);
        }
      },
    );
  };

  return (
    <View style={styles.page}>
      <Image
        source={{uri: selectedPhoto?.uri || user.image}}
        style={styles.avatar}
      />
      <Text onPress={onChangePhoto} style={styles.textButton}>
        Change profile photo
      </Text>
      <CustomInput
        name="name"
        rules={{required: 'Name is required'}}
        control={control}
        label="Name"
        multiLine
      />
      <CustomInput
        name="username"
        control={control}
        rules={{required: 'Username is required'}}
        label="Username"
        multiLine
      />
      <CustomInput name="website" control={control} label="Website" multiLine />
      <CustomInput name="bio" control={control} label="Bio" multiLine={true} />
      <Text style={styles.textButton} onPress={handleSubmit(onSubmit)}>
        Submit
      </Text>
    </View>
  );
};

export default EditProfileScreen;

const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    padding: 10,
  },
  avatar: {width: width / 3, aspectRatio: 1, borderRadius: width / 2},
  textButton: {
    color: colors.primary,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.semi,
    margin: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginTop: 10,
  },
  label: {
    width: 75,
  },
  input: {
    borderColor: colors.border,
    borderWidth: 1,
  },
  error: {
    color: colors.accent,
  },
});
