import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../theme/colors';
import {IComment} from './../../types/models';

interface ICommentProps {
  comment: IComment;
  includeDetails: boolean;
}

const Comment = ({comment, includeDetails = false}: ICommentProps) => {
  const [isLiked, setIsLiked] = React.useState<boolean>(false);

  const toggleLike = () => {
    setIsLiked(v => !v);
  };

  return (
    <View style={styles.comment}>
      {includeDetails && (
        <Image source={{uri: comment.user.image}} style={styles.avatar} />
      )}

      <View style={styles.middleColumn}>
        <Text style={styles.commentText}>
          <Text style={styles.bold}>{comment.user.userName} </Text>
          {comment.comment}
        </Text>
        {includeDetails && (
          <View style={styles.footer}>
            <Text style={styles.footerText}>2d </Text>
            <Text style={styles.footerText}>5 likes </Text>
            <Text style={styles.footerText}>Reply</Text>
          </View>
        )}
      </View>
      <Pressable onPress={toggleLike} hitSlop={15}>
        <AntDesign
          name={isLiked ? 'heart' : 'hearto'}
          size={16}
          color={isLiked ? colors.accent : colors.grey}
          style={styles.icon}
        />
      </Pressable>
    </View>
  );
};

export default Comment;
