/* eslint-disable max-lines */
import { configureRefreshFetch } from 'refresh-fetch';

import { getTimezone } from '../datetime';

import { FilterReadingDaysParams, ReadingDay, UpdateReadingDayBody } from '@/types/auth/ReadingDay';
import {
  CreateReadingGoalRequest,
  EstimatedReadingGoal,
  ReadingGoal,
  UpdateReadingGoalRequest,
} from '@/types/auth/ReadingGoal';
import { StreakWithMetadataParams, StreakWithUserMetadata } from '@/types/auth/Streak';
import {
  makeBookmarksUrl,
  makeCompleteSignupUrl,
  makeUserProfileUrl,
  makeDeleteAccountUrl,
  makeBookmarksRangeUrl,
  makeBookmarkUrl,
  makeReadingSessionsUrl,
  makeUserPreferencesUrl,
  makeVerificationCodeUrl,
  makeUserBulkPreferencesUrl,
  makeLogoutUrl,
  makeCompleteAnnouncementUrl,
  makeSyncLocalDataUrl,
  makeRefreshTokenUrl,
  makeCollectionsUrl,
  makeGetBookmarkByCollectionId,
  makeAddCollectionUrl,
  makeBookmarkCollectionsUrl,
  CollectionsQueryParams,
  makeUpdateCollectionUrl,
  BookmarkByCollectionIdQueryParams,
  makeDeleteCollectionUrl,
  makeAddCollectionBookmarkUrl,
  makeDeleteCollectionBookmarkByIdUrl,
  makeDeleteCollectionBookmarkByKeyUrl,
  makeDeleteBookmarkUrl,
  makeReadingDaysUrl,
  makeReadingGoalUrl,
  makeFilterReadingDaysUrl,
  makeEstimateReadingGoalUrl,
  makeStreakUrl,
} from '@/utils/auth/apiPaths';
import { fetcher } from 'src/api';
import CompleteAnnouncementRequest from 'types/auth/CompleteAnnouncementRequest';
import { GetBookmarkCollectionsIdResponse } from 'types/auth/GetBookmarksByCollectionId';
import PreferenceGroup from 'types/auth/PreferenceGroup';
import RefreshToken from 'types/auth/RefreshToken';
import SyncDataType from 'types/auth/SyncDataType';
import SyncUserLocalDataResponse from 'types/auth/SyncUserLocalDataResponse';
import UserPreferencesResponse from 'types/auth/UserPreferencesResponse';
import UserProfile from 'types/auth/UserProfile';
import Bookmark from 'types/Bookmark';
import BookmarksMap from 'types/BookmarksMap';
import BookmarkType from 'types/BookmarkType';
import { Collection } from 'types/Collection';
import CompleteSignupRequest from 'types/CompleteSignupRequest';

type RequestData = Record<string, any>;

const handleErrors = async (res) => {
  const body = await res.json();
  throw new Error(body?.message);
};

/**
 * Execute a POST request
 *
 * @param {string} url
 * @param {RequestData} requestData
 * @returns {Promise<T>}
 */
export const postRequest = <T>(url: string, requestData: RequestData): Promise<T> =>
  privateFetcher(url, {
    method: 'POST',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestData),
  });

/**
 * Execute a DELETE request.
 *
 * @param {string} url
 * @param {RequestData} requestData
 * @returns {Promise<T>}
 */
const deleteRequest = <T>(url: string, requestData?: RequestData): Promise<T> =>
  privateFetcher(url, {
    method: 'DELETE',
    ...(requestData && {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestData),
    }),
  });

/**
 * Execute a PATCH request.
 *
 * @param {string} url
 * @param {RequestData} requestData
 * @returns {Promise<T>}
 */
const patchRequest = <T>(url: string, requestData?: RequestData): Promise<T> =>
  privateFetcher(url, {
    method: 'PATCH',
    ...(requestData && {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestData),
    }),
  });

export const getUserProfile = async (): Promise<UserProfile> =>
  privateFetcher(makeUserProfileUrl());

export const refreshToken = async (): Promise<RefreshToken> =>
  privateFetcher(makeRefreshTokenUrl());

export const completeSignup = async (data: CompleteSignupRequest): Promise<UserProfile> =>
  postRequest(makeCompleteSignupUrl(), data);

export const completeAnnouncement = async (data: CompleteAnnouncementRequest): Promise<any> => {
  return postRequest(makeCompleteAnnouncementUrl(), data);
};

export const deleteAccount = async (): Promise<void> => deleteRequest(makeDeleteAccountUrl());

type AddBookmarkParams = {
  key: number;
  mushafId: number;
  type: BookmarkType;
  verseNumber?: number;
};

export const addBookmark = async ({ key, mushafId, type, verseNumber }: AddBookmarkParams) =>
  postRequest(makeBookmarksUrl(mushafId), {
    key,
    mushaf: mushafId,
    type,
    verseNumber,
  });

export const getPageBookmarks = async (
  mushafId: number,
  chapterNumber: number,
  verseNumber: number,
  perPage: number,
): Promise<BookmarksMap> =>
  privateFetcher(makeBookmarksRangeUrl(mushafId, chapterNumber, verseNumber, perPage));

export const getBookmark = async (
  mushafId: number,
  key: number,
  type: BookmarkType,
  verseNumber?: number,
): Promise<Bookmark> => privateFetcher(makeBookmarkUrl(mushafId, key, type, verseNumber));

export const getBookmarkCollections = async (
  mushafId: number,
  key: number,
  type: BookmarkType,
  verseNumber?: number,
): Promise<string[]> =>
  privateFetcher(makeBookmarkCollectionsUrl(mushafId, key, type, verseNumber));

export const getReadingGoal = async (): Promise<{ data?: ReadingGoal }> =>
  privateFetcher(makeReadingGoalUrl());

export const addReadingGoal = async (
  data: CreateReadingGoalRequest,
): Promise<{ data?: ReadingGoal }> => postRequest(makeReadingGoalUrl(), data);

export const updateReadingGoal = async (
  data: UpdateReadingGoalRequest,
): Promise<{ data?: ReadingGoal }> => patchRequest(makeReadingGoalUrl(), data);

export const estimateReadingGoal = async (
  data: CreateReadingGoalRequest,
): Promise<{ data?: EstimatedReadingGoal }> => postRequest(makeEstimateReadingGoalUrl(), data);

export const deleteReadingGoal = async (): Promise<void> => deleteRequest(makeReadingGoalUrl());

export const filterReadingDays = async (
  params: FilterReadingDaysParams,
): Promise<{ data: ReadingDay[] }> => privateFetcher(makeFilterReadingDaysUrl(params));

export const getReadingDay = async (): Promise<{ data?: ReadingDay }> =>
  privateFetcher(makeReadingDaysUrl());

export const addReadingSession = async (chapterNumber: number, verseNumber: number) =>
  postRequest(makeReadingSessionsUrl(), {
    chapterNumber,
    verseNumber,
  });

export const updateReadingDay = async (body: UpdateReadingDayBody): Promise<ReadingDay> =>
  postRequest(makeReadingDaysUrl(), body);

export const getStreakWithUserMetadata = async (
  params: StreakWithMetadataParams,
): Promise<{ data: StreakWithUserMetadata }> => privateFetcher(makeStreakUrl(params));

export const syncUserLocalData = async (
  payload: Record<SyncDataType, any>,
): Promise<SyncUserLocalDataResponse> => postRequest(makeSyncLocalDataUrl(), payload);

export const getUserPreferences = async (): Promise<UserPreferencesResponse> => {
  const userPreferences = (await privateFetcher(
    makeUserPreferencesUrl(),
  )) as UserPreferencesResponse;
  return userPreferences;
};

export const addOrUpdateUserPreference = async (key: string, value: any, group: PreferenceGroup) =>
  postRequest(makeUserPreferencesUrl(), {
    key,
    value,
    group,
  });

export const getCollectionsList = async (
  queryParams: CollectionsQueryParams,
): Promise<{ data: Collection[] }> => {
  return privateFetcher(makeCollectionsUrl(queryParams));
};

export const updateCollection = async (collectionId: string, { name }) => {
  return postRequest(makeUpdateCollectionUrl(collectionId), { name });
};

export const deleteCollection = async (collectionId: string) => {
  return deleteRequest(makeDeleteCollectionUrl(collectionId));
};

export const addCollectionBookmark = async ({ collectionId, key, mushaf, type, verseNumber }) => {
  return postRequest(makeAddCollectionBookmarkUrl(collectionId), {
    collectionId,
    key,
    mushaf,
    type,
    verseNumber,
  });
};

export const deleteCollectionBookmarkById = async (collectionId: string, bookmarkId: string) => {
  return deleteRequest(makeDeleteCollectionBookmarkByIdUrl(collectionId, bookmarkId));
};

export const deleteCollectionBookmarkByKey = async ({
  collectionId,
  key,
  mushaf,
  type,
  verseNumber,
}) => {
  return deleteRequest(makeDeleteCollectionBookmarkByKeyUrl(collectionId), {
    collectionId,
    key,
    mushaf,
    type,
    verseNumber,
  });
};

export const deleteBookmarkById = async (bookmarkId: string) => {
  return deleteRequest(makeDeleteBookmarkUrl(bookmarkId));
};

export const getBookmarksByCollectionId = async (
  collectionId: string,
  queryParams: BookmarkByCollectionIdQueryParams,
): Promise<GetBookmarkCollectionsIdResponse> => {
  return privateFetcher(makeGetBookmarkByCollectionId(collectionId, queryParams));
};

export const addCollection = async (collectionName: string) => {
  return postRequest(makeAddCollectionUrl(), { name: collectionName });
};

export const requestVerificationCode = async (emailToVerify) => {
  return postRequest(makeVerificationCodeUrl(), { email: emailToVerify });
};
export const addOrUpdateBulkUserPreferences = async (preferences: Record<PreferenceGroup, any>) =>
  postRequest(makeUserBulkPreferencesUrl(), preferences);

export const logoutUser = async () => {
  return postRequest(makeLogoutUrl(), {});
};

const shouldRefreshToken = (error) => {
  return error?.message === 'must refresh token';
};

export const withCredentialsFetcher = async <T>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<T> => {
  try {
    const data = await fetcher<T>(input, {
      ...init,
      credentials: 'include',
      headers: {
        ...init?.headers,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'x-timezone': getTimezone(),
      },
    });
    return data;
  } catch (error) {
    await handleErrors(error);
    return null;
  }
};

export const privateFetcher = configureRefreshFetch({
  shouldRefreshToken,
  // @ts-ignore
  refreshToken,
  fetch: withCredentialsFetcher,
});
