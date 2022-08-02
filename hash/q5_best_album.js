function solution(genres, plays) {

  // 입력받은 데이터를 장르별 테이블 형태로 정리합니다.
  // { 장르명 : [ [고유번호, 재생횟수] ] }
  const count = {};

  // 정렬 결과를 담을 배열입니다.
  let answer = [];

  // 입력받은 데이터를 장르별 총 재생횟수 형태로 정리합니다.
  // { 장르명 : 총 재생횟수 }
  const acc = genres.reduce((accumulated, genre, id) => {   // 각 곡의 장르를 확인합니다.

    // 장르별 테이블을 업데이트 합니다.
    count[genre]                              // 현재 곡의 장르가 장르별 테이블에 처음 집계되는 것인지 확인합니다
      ? count[genre].push([id, plays[id]])    // 처음 집계되지 않았다면 : 기존 리스트에 [고유번호, 재생횟수] 아이템 추가
      : count[genre] = [[id, plays[id]]];     // 처음 집계된는 거였따면 : 새 리스트 생성 [ [고유번호, 재생횟수] ]

    // 장르별 총 재생횟수를 업데이트 합니다.
    accumulated.set(genre,
      accumulated.get(genre)                  // 현재 곡의 장르가 장르별 총 재생시간에 처음 집계되는 것인지 확인합니다
        ? accumulated.get(genre) + plays[id]  // 처음 집계되지 않았다면 : 기존 값에 현재 곡의 재생횟수 합산
        : plays[id]                           // 처음 집계되는 거였다면 : 현재 곡의 재생횟수 기록
    );

    // 현재까지의 집계 결과를 반환합니다.
    return accumulated;
  }, new Map());

  // 정렬을 시작합니다.
  [...acc]    //
    .sort(([_genre1, playTime1], [_genre2, playTime2]) => playTime2 - playTime1)  // 총 재생횟수가 가장 높은 장르부터 포함시킵니다.
    .map(([genre, _playTime]) => {
      answer = answer.concat(                                         // 기존 선정 결과 배열에 현재 장르의 곡들을 포함시킵니다.
        count[genre]                                                  // 각 장르 내에서 각 곡들이 재생된 횟수를 확인합니다.
          .sort(([_id1, plays1], [_id2, plays2]) => plays2 - plays1)  // 각 장르 내에서 각 곡들이 가장 많이 재생된 순으로 정렬합니다.
          .slice(0, 2)                                                // 각 장르 내에서 가장 많이 재생된 노래 2 곡만 포함시킵니다.
      );
    });

  // 정렬 결과를 반환합니다. : [곡 고유번호]
  return answer.map(([id, _playTime]) => id);
}


console.log(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]));



// const reverse = (a, b) => b - a;
//
//
//
// function solution(genres, plays) {
//
//   // 장르별로 정리하기 위한 해시 테이블을 만듭니다. { genre1 : [n11, n12, ...] }
//   const dictionary = {};
//   const genresSet = [...new Set(genres)];
//   genresSet.map(genre => dictionary[genre] = {});
//
//   // 장르별 재생 시간을 따로 집계하기 위한 해시 테이블입니다.
//   const genreToPlayTime = {};
//   genresSet.map(genre => genreToPlayTime[genre] = 0);
//
//   // 곡 고유번호별로 순회하면서 해시 테이블을 업데이트 합니다.
//   for (let id = 0 ; id < genres.length ; id++) {
//     const genre = genres[id];
//     const play = plays[id];
//
//     // 장르별 재생횟수별 곡 번호 목록을 업데이트 합니다.
//     dictionary[genre][play] = [
//       ...dictionary[genre][play] || [],
//       id
//     ];
//
//     // 장르별 재생 시간을 업데이트 합니다.
//     genreToPlayTime[genre] += play;
//   }
//
//   // { 장르 : 재생시간 } -> { 재생시간 : 장르 } 로 키-값 을 뒤바꿉니다. (모든 장르가 재생 횟수가 다르므로 가능)
//   const playTimeToGenre = {};
//   Object.keys(genreToPlayTime).forEach(genre => {
//     playTimeToGenre[genreToPlayTime[genre]] = genre;
//   });
//
//   // 정렬을 수행합니다.
//   let answer = [];
//   Object.keys(playTimeToGenre)          // 각 장르별 총 재생시간을 확인합니다.
//     .sort(reverse)                      // 각 장르별 총 재생시간을 역순으로 정렬합니다.
//     .forEach(genrePlayTime => {
//       const genre = playTimeToGenre[genrePlayTime];
//       Object.keys(dictionary[genre])    // 각 장르 내에서 재생된 횟수를 확인합니다.
//         .sort(reverse)                  // 각 장르 내에서 가장 많이 재생된 순으로 정렬합니다.
//         .slice(0, 2)                    // 각 장르 내에서 가장 많이 재생된 노래 2 곡만 포함시킵니다.
//         .forEach(playTime => {          // 각 장르 내에서 각 곡별로 재생된 횟수를 순회합니다.
//           answer = [
//             ...answer,
//             ...dictionary[genre][playTime].sort()   // 장르 내에서 재생 횟수가 같은 노래는 고유 번호가 낮은 노래를 먼저 수록합니다.
//           ];
//         });
//     });
//
//   // 정렬 결과를 반환합니다.
//   return answer;
// }
