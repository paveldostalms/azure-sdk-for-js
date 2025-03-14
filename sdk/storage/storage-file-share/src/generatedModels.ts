// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  CopyStatusType,
  DirectoryDeleteHeaders,
  DirectoryListFilesAndDirectoriesSegmentHeaders,
  DirectoryListHandlesHeaders,
  DirectoryRenameHeaders,
  DirectorySetMetadataHeaders,
  FileAbortCopyHeaders,
  FileDeleteHeaders,
  FileGetRangeListHeaders,
  FileListHandlesHeaders,
  FileProperty,
  FileRenameHeaders,
  FileServiceProperties,
  FileSetMetadataHeaders,
  FileStartCopyHeaders,
  FileUploadRangeFromURLHeaders,
  FileUploadRangeHeaders,
  LeaseDurationType,
  LeaseStateType,
  LeaseStatusType,
  ServiceGetPropertiesHeaders,
  ServiceSetPropertiesHeaders,
  ShareCreateHeaders,
  ShareCreatePermissionHeaders,
  ShareCreateSnapshotHeaders,
  ShareDeleteHeaders,
  ShareFileRangeList,
  ShareGetAccessPolicyHeaders,
  ShareGetPermissionHeaders,
  ShareGetPropertiesHeaders,
  ShareGetStatisticsHeaders,
  SharePermission,
  ShareSetAccessPolicyHeaders,
  ShareSetMetadataHeaders,
  ShareStats,
} from "./generated/src/models";

import type { ShareSetPropertiesHeaders } from "./generated/src/models";
import { FileDownloadResponse, FilePosixProperties, FileSetHttpHeadersHeaders } from "./models";
import type { WithResponse } from "./utils/utils.common";

/** Defines headers for Directory_create operation. */
export interface DirectoryCreateHeaders {
  /** The ETag contains a value which represents the version of the directory, in quotes. */
  etag?: string;
  /** Returns the date and time the share was last modified. Any operation that modifies the directory or its properties updates the last modified time. Operations on files do not affect the last modified time of the directory. */
  lastModified?: Date;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the File service used to execute the request. */
  version?: string;
  /** A UTC date/time value generated by the service that indicates the time at which the response was initiated. */
  date?: Date;
  /** The value of this header is set to true if the contents of the request are successfully encrypted using the specified algorithm, and false otherwise. */
  isServerEncrypted?: boolean;
  /** Key of the permission set for the directory. */
  filePermissionKey?: string;
  /** Attributes set for the directory. */
  fileAttributes?: string;
  /** Creation time for the directory. */
  fileCreatedOn?: Date;
  /** Last write time for the directory. */
  fileLastWriteOn?: Date;
  /** Change time for the directory. */
  fileChangeOn?: Date;
  /** The fileId of the directory. */
  fileId?: string;
  /** The parent fileId of the directory. */
  fileParentId?: string;
  /** Properties of NFS files. */
  posixProperties?: FilePosixProperties;
  /** Error Code */
  errorCode?: string;
}

/** Contains response data for the create operation. */
export type DirectoryCreateResponse = WithResponse<DirectoryCreateHeaders, DirectoryCreateHeaders>;

/** Contains response data for the delete operation. */
export type DirectoryDeleteResponse = WithResponse<DirectoryDeleteHeaders, DirectoryDeleteHeaders>;

/** Defines headers for Directory_getProperties operation. */
export interface DirectoryGetPropertiesHeaders {
  /** A set of name-value pairs that contain metadata for the directory. */
  metadata?: { [propertyName: string]: string };
  /** The ETag contains a value that you can use to perform operations conditionally, in quotes. */
  etag?: string;
  /** Returns the date and time the Directory was last modified. Operations on files within the directory do not affect the last modified time of the directory. */
  lastModified?: Date;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the File service used to execute the request. */
  version?: string;
  /** A UTC date/time value generated by the service that indicates the time at which the response was initiated. */
  date?: Date;
  /** The value of this header is set to true if the directory metadata is completely encrypted using the specified algorithm. Otherwise, the value is set to false. */
  isServerEncrypted?: boolean;
  /** Attributes set for the directory. */
  fileAttributes?: string;
  /** Creation time for the directory. */
  fileCreatedOn?: Date;
  /** Last write time for the directory. */
  fileLastWriteOn?: Date;
  /** Change time for the directory. */
  fileChangeOn?: Date;
  /** Key of the permission set for the directory. */
  filePermissionKey?: string;
  /** The fileId of the directory. */
  fileId?: string;
  /** The parent fileId of the directory. */
  fileParentId?: string;
  /** Properties of NFS files. */
  posixProperties?: FilePosixProperties;
  /** Error Code */
  errorCode?: string;
}

/** Contains response data for the getProperties operation. */
export type DirectoryGetPropertiesResponse = WithResponse<
  DirectoryGetPropertiesHeaders,
  DirectoryGetPropertiesHeaders
>;

/** Contains response data for the listFilesAndDirectoriesSegment operation. */
export type DirectoryListFilesAndDirectoriesSegmentResponse = WithResponse<
  DirectoryListFilesAndDirectoriesSegmentHeaders & ListFilesAndDirectoriesSegmentResponse,
  DirectoryListFilesAndDirectoriesSegmentHeaders,
  ListFilesAndDirectoriesSegmentResponse
>;

/** Contains response data for the listHandles operation. */
export type DirectoryListHandlesResponse = WithResponse<
  DirectoryListHandlesHeaders & ListHandlesResponse,
  DirectoryListHandlesHeaders,
  ListHandlesResponse
>;

/** Contains response data for the setMetadata operation. */
export type DirectorySetMetadataResponse = WithResponse<
  DirectorySetMetadataHeaders,
  DirectorySetMetadataHeaders
>;

/** Defines headers for Directory_setProperties operation. */
export interface DirectorySetPropertiesHeaders {
  /** The ETag contains a value which represents the version of the file, in quotes. */
  etag?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Returns the date and time the directory was last modified. Any operation that modifies the directory or its properties updates the last modified time. Operations on files do not affect the last modified time of the directory. */
  lastModified?: Date;
  /** Indicates the version of the File service used to execute the request. */
  version?: string;
  /** A UTC date/time value generated by the service that indicates the time at which the response was initiated. */
  date?: Date;
  /** The value of this header is set to true if the contents of the request are successfully encrypted using the specified algorithm, and false otherwise. */
  isServerEncrypted?: boolean;
  /** Key of the permission set for the directory. */
  filePermissionKey?: string;
  /** Attributes set for the directory. */
  fileAttributes?: string;
  /** Creation time for the directory. */
  fileCreatedOn?: Date;
  /** Last write time for the directory. */
  fileLastWriteOn?: Date;
  /** Change time for the directory. */
  fileChangeOn?: Date;
  /** The fileId of the directory. */
  fileId?: string;
  /** The parent fileId of the directory. */
  fileParentId?: string;
  /** Properties of NFS files. */
  posixProperties?: FilePosixProperties;
  /** Error Code */
  errorCode?: string;
}

/** Contains response data for the setProperties operation. */
export type DirectorySetPropertiesResponse = WithResponse<
  DirectorySetPropertiesHeaders,
  DirectorySetPropertiesHeaders
>;

/** Contains response data for the abortCopy operation. */
export type FileAbortCopyResponse = WithResponse<FileAbortCopyHeaders, FileAbortCopyHeaders>;

/** Defines headers for File_create operation. */
export interface FileCreateHeaders {
  /** The ETag contains a value which represents the version of the file, in quotes. */
  etag?: string;
  /** Returns the date and time the share was last modified. Any operation that modifies the directory or its properties updates the last modified time. Operations on files do not affect the last modified time of the directory. */
  lastModified?: Date;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the File service used to execute the request. */
  version?: string;
  /** A UTC date/time value generated by the service that indicates the time at which the response was initiated. */
  date?: Date;
  /** The value of this header is set to true if the contents of the request are successfully encrypted using the specified algorithm, and false otherwise. */
  isServerEncrypted?: boolean;
  /** Key of the permission set for the file. */
  filePermissionKey?: string;
  /** Attributes set for the file. */
  fileAttributes?: string;
  /** Creation time for the file. */
  fileCreatedOn?: Date;
  /** Last write time for the file. */
  fileLastWriteOn?: Date;
  /** Change time for the file. */
  fileChangeOn?: Date;
  /** The fileId of the file. */
  fileId?: string;
  /** The parent fileId of the file. */
  fileParentId?: string;
  /** Properties of NFS files. */
  posixProperties?: FilePosixProperties;
  /** Error Code */
  errorCode?: string;
}

/** Contains response data for the create operation. */
export type FileCreateResponse = WithResponse<FileCreateHeaders, FileCreateHeaders>;

/** Contains response data for the delete operation. */
export type FileDeleteResponse = WithResponse<FileDeleteHeaders, FileDeleteHeaders>;

/** Defines headers for File_createHardLink operation. */
export interface FileCreateHardLinkHeaders {
  /** The ETag contains a value which represents the version of the file, in quotes. */
  etag?: string;
  /** Returns the date and time the share was last modified. Any operation that modifies the directory or its properties updates the last modified time. Operations on files do not affect the last modified time of the directory. */
  lastModified?: Date;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the File service used to execute the request. */
  version?: string;
  /** A UTC date/time value generated by the service that indicates the time at which the response was initiated. */
  date?: Date;
  /** Creation time for the file. */
  fileCreationTime?: Date;
  /** Last write time for the file. */
  fileLastWriteTime?: Date;
  /** Change time for the file. */
  fileChangeTime?: Date;
  /** The fileId of the file. */
  fileId?: string;
  /** The parent fileId of the directory. */
  fileParentId?: string;
  /** If a client request id header is sent in the request, this header will be present in the response with the same value. */
  clientRequestId?: string;
  /** Properties of NFS files. */
  posixProperties?: FilePosixProperties;
}

/** Contains response data for the create hard link operation. */
export type FileCreateHardLinkResponse = WithResponse<
  FileCreateHardLinkHeaders,
  FileCreateHardLinkHeaders
>;

/** Defines headers for File_getProperties operation. */
export interface FileGetPropertiesHeaders {
  /** Returns the date and time the file was last modified. The date format follows RFC 1123. Any operation that modifies the file or its properties updates the last modified time. */
  lastModified?: Date;
  /** A set of name-value pairs associated with this file as user-defined metadata. */
  metadata?: { [propertyName: string]: string };
  /** Returns the type File. Reserved for future use. */
  fileType?: string;
  /** The size of the file in bytes. This header returns the value of the 'x-ms-content-length' header that is stored with the file. */
  contentLength?: number;
  /** The content type specified for the file. The default content type is 'application/octet-stream' */
  contentType?: string;
  /** The ETag contains a value that you can use to perform operations conditionally, in quotes. */
  etag?: string;
  /** If the Content-MD5 header has been set for the file, the Content-MD5 response header is returned so that the client can check for message content integrity. */
  contentMD5?: Uint8Array;
  /** If the Content-Encoding request header has previously been set for the file, the Content-Encoding value is returned in this header. */
  contentEncoding?: string;
  /** If the Cache-Control request header has previously been set for the file, the Cache-Control value is returned in this header. */
  cacheControl?: string;
  /** Returns the value that was specified for the 'x-ms-content-disposition' header and specifies how to process the response. */
  contentDisposition?: string;
  /** Returns the value that was specified for the Content-Language request header. */
  contentLanguage?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the File service used to execute the request. */
  version?: string;
  /** A UTC date/time value generated by the service that indicates the time at which the response was initiated. */
  date?: Date;
  /** Conclusion time of the last attempted Copy File operation where this file was the destination file. This value can specify the time of a completed, aborted, or failed copy attempt. */
  copyCompletedOn?: Date;
  /** Only appears when x-ms-copy-status is failed or pending. Describes cause of fatal or non-fatal copy operation failure. */
  copyStatusDescription?: string;
  /** String identifier for the last attempted Copy File operation where this file was the destination file. */
  copyId?: string;
  /** Contains the number of bytes copied and the total bytes in the source in the last attempted Copy File operation where this file was the destination file. Can show between 0 and Content-Length bytes copied. */
  copyProgress?: string;
  /** URL up to 2KB in length that specifies the source file used in the last attempted Copy File operation where this file was the destination file. */
  copySource?: string;
  /** State of the copy operation identified by 'x-ms-copy-id'. */
  copyStatus?: CopyStatusType;
  /** The value of this header is set to true if the file data and application metadata are completely encrypted using the specified algorithm. Otherwise, the value is set to false (when the file is unencrypted, or if only parts of the file/application metadata are encrypted). */
  isServerEncrypted?: boolean;
  /** Attributes set for the file. */
  fileAttributes?: string;
  /** Creation time for the file. */
  fileCreatedOn?: Date;
  /** Last write time for the file. */
  fileLastWriteOn?: Date;
  /** Change time for the file. */
  fileChangeOn?: Date;
  /** Key of the permission set for the file. */
  filePermissionKey?: string;
  /** The fileId of the file. */
  fileId?: string;
  /** The parent fileId of the file. */
  fileParentId?: string;
  /** When a file is leased, specifies whether the lease is of infinite or fixed duration. */
  leaseDuration?: LeaseDurationType;
  /** Lease state of the file. */
  leaseState?: LeaseStateType;
  /** The current lease status of the file. */
  leaseStatus?: LeaseStatusType;
  /** Properties of NFS files. */
  posixProperties?: FilePosixProperties;
  /** Error Code */
  errorCode?: string;
}

/** Contains response data for the getProperties operation. */
export type FileGetPropertiesResponse = WithResponse<
  FileGetPropertiesHeaders,
  FileGetPropertiesHeaders
>;

/** Contains response data for the listHandles operation. */
export type FileListHandlesResponse = WithResponse<
  FileListHandlesHeaders & ListHandlesResponse,
  FileListHandlesHeaders,
  ListHandlesResponse
>;

/** Contains response data for the setMetadata operation. */
export type FileSetMetadataResponse = WithResponse<FileSetMetadataHeaders, FileSetMetadataHeaders>;

/** Contains response data for the startCopy operation. */
export type FileStartCopyResponse = WithResponse<FileStartCopyHeaders, FileStartCopyHeaders>;

/** Contains response data for the uploadRange operation. */
export type FileUploadRangeResponse = WithResponse<FileUploadRangeHeaders, FileUploadRangeHeaders>;

/** Contains response data for the getProperties operation. */
export type ServiceGetPropertiesResponse = WithResponse<
  ServiceGetPropertiesHeaders & FileServiceProperties,
  ServiceGetPropertiesHeaders,
  FileServiceProperties
>;

/** Contains response data for the setProperties operation. */
export type ServiceSetPropertiesResponse = WithResponse<
  ServiceSetPropertiesHeaders,
  ServiceSetPropertiesHeaders
>;

/** Contains response data for the createPermission operation. */
export type ShareCreatePermissionResponse = WithResponse<
  ShareCreatePermissionHeaders,
  ShareCreatePermissionHeaders
>;

/** Contains response data for the create operation. */
export type ShareCreateResponse = WithResponse<ShareCreateHeaders, ShareCreateHeaders>;

/** Contains response data for the createSnapshot operation. */
export type ShareCreateSnapshotResponse = WithResponse<
  ShareCreateSnapshotHeaders,
  ShareCreateSnapshotHeaders
>;

/** Contains response data for the delete operation. */
export type ShareDeleteResponse = WithResponse<ShareDeleteHeaders, ShareDeleteHeaders>;

/** Contains response data for the getPermission operation. */
export type ShareGetPermissionResponse = WithResponse<
  ShareGetPermissionHeaders & SharePermission,
  ShareGetPermissionHeaders,
  SharePermission
>;

/** Contains response data for the setAccessPolicy operation. */
export type ShareSetAccessPolicyResponse = WithResponse<
  ShareSetAccessPolicyHeaders,
  ShareGetAccessPolicyHeaders
>;

/** Contains response data for the setMetadata operation. */
export type ShareSetMetadataResponse = WithResponse<
  ShareSetMetadataHeaders,
  ShareSetMetadataHeaders
>;

/** Contains response data for the setProperties operation. */
export type ShareSetPropertiesResponse = WithResponse<
  ShareSetPropertiesHeaders,
  ShareSetPropertiesHeaders
>;

/** Contains response data for the rename operation. */
export type DirectoryRenameResponse = WithResponse<DirectoryRenameHeaders, DirectoryRenameHeaders>;

/** Defines headers for File_download operation. */
export interface FileDownloadHeaders {
  /** Returns the date and time the file was last modified. Any operation that modifies the file or its properties updates the last modified time. */
  lastModified?: Date;
  /** A set of name-value pairs associated with this file as user-defined metadata. */
  metadata?: { [propertyName: string]: string };
  /** The number of bytes present in the response body. */
  contentLength?: number;
  /** The content type specified for the file. The default content type is 'application/octet-stream' */
  contentType?: string;
  /** Indicates the range of bytes returned if the client requested a subset of the file by setting the Range request header. */
  contentRange?: string;
  /** The ETag contains a value that you can use to perform operations conditionally, in quotes. */
  etag?: string;
  /** If the file has an MD5 hash and the request is to read the full file, this response header is returned so that the client can check for message content integrity. If the request is to read a specified range and the 'x-ms-range-get-content-md5' is set to true, then the request returns an MD5 hash for the range, as long as the range size is less than or equal to 4 MB. If neither of these sets of conditions is true, then no value is returned for the 'Content-MD5' header. */
  contentMD5?: Uint8Array;
  /** Returns the value that was specified for the Content-Encoding request header. */
  contentEncoding?: string;
  /** Returned if it was previously specified for the file. */
  cacheControl?: string;
  /** Returns the value that was specified for the 'x-ms-content-disposition' header and specifies how to process the response. */
  contentDisposition?: string;
  /** Returns the value that was specified for the Content-Language request header. */
  contentLanguage?: string;
  /** This header uniquely identifies the request that was made and can be used for troubleshooting the request. */
  requestId?: string;
  /** Indicates the version of the File service used to execute the request. */
  version?: string;
  /** Indicates that the service supports requests for partial file content. */
  acceptRanges?: string;
  /** A UTC date/time value generated by the service that indicates the time at which the response was initiated. */
  date?: Date;
  /** Conclusion time of the last attempted Copy File operation where this file was the destination file. This value can specify the time of a completed, aborted, or failed copy attempt. */
  copyCompletedOn?: Date;
  /** Only appears when x-ms-copy-status is failed or pending. Describes cause of fatal or non-fatal copy operation failure. */
  copyStatusDescription?: string;
  /** String identifier for the last attempted Copy File operation where this file was the destination file. */
  copyId?: string;
  /** Contains the number of bytes copied and the total bytes in the source in the last attempted Copy File operation where this file was the destination file. Can show between 0 and Content-Length bytes copied. */
  copyProgress?: string;
  /** URL up to 2KB in length that specifies the source file used in the last attempted Copy File operation where this file was the destination file. */
  copySource?: string;
  /** State of the copy operation identified by 'x-ms-copy-id'. */
  copyStatus?: CopyStatusType;
  /** If the file has a MD5 hash, and if request contains range header (Range or x-ms-range), this response header is returned with the value of the whole file's MD5 value. This value may or may not be equal to the value returned in Content-MD5 header, with the latter calculated from the requested range. */
  fileContentMD5?: Uint8Array;
  /** The value of this header is set to true if the file data and application metadata are completely encrypted using the specified algorithm. Otherwise, the value is set to false (when the file is unencrypted, or if only parts of the file/application metadata are encrypted). */
  isServerEncrypted?: boolean;
  /** Attributes set for the file. */
  fileAttributes?: string;
  /** Creation time for the file. */
  fileCreatedOn?: Date;
  /** Last write time for the file. */
  fileLastWriteOn?: Date;
  /** Change time for the file. */
  fileChangeOn?: Date;
  /** Key of the permission set for the file. */
  filePermissionKey?: string;
  /** The fileId of the file. */
  fileId?: string;
  /** The parent fileId of the file. */
  fileParentId?: string;
  /** When a file is leased, specifies whether the lease is of infinite or fixed duration. */
  leaseDuration?: LeaseDurationType;
  /** Lease state of the file. */
  leaseState?: LeaseStateType;
  /** The current lease status of the file. */
  leaseStatus?: LeaseStatusType;
  /** Properties of NFS files. */
  posixProperties?: FilePosixProperties;
  /** Error Code */
  errorCode?: string;
}

/** Contains response data for the download operation. */
export type FileDownloadResponseModel = WithResponse<FileDownloadResponse, FileDownloadHeaders>;

/** Contains response data for the uploadRangeFromURL operation. */
export type FileUploadRangeFromURLResponse = WithResponse<
  FileUploadRangeFromURLHeaders,
  FileUploadRangeFromURLHeaders
>;

/** Contains response data for the getProperties operation. */
export type ShareGetPropertiesResponseModel = WithResponse<
  ShareGetPropertiesHeaders,
  ShareGetPropertiesHeaders
>;

/** Contains response data for the getStatistics operation. */
export type ShareGetStatisticsResponseModel = WithResponse<
  ShareGetStatisticsHeaders & ShareStats,
  ShareGetStatisticsHeaders,
  ShareStats
>;

/** Contains response data for the getRangeList operation. */
export type FileGetRangeListDiffResponse = WithResponse<
  FileGetRangeListHeaders & ShareFileRangeList,
  FileGetRangeListHeaders,
  ShareFileRangeList
>;

/** Contains response data for the setHttpHeaders operation. */
export type FileSetHTTPHeadersResponse = WithResponse<
  FileSetHttpHeadersHeaders,
  FileSetHttpHeadersHeaders
>;

/** Contains response data for the rename operation. */
export type FileRenameResponse = WithResponse<FileRenameHeaders, FileRenameHeaders>;

// explicitly exporting types that we need.

export {
  CopyStatusType,
  DeleteSnapshotsOptionType,
  FileDownloadOptionalParams,
  FileGetRangeListHeaders,
  FileLastWrittenMode,
  FileServiceProperties,
  FileUploadRangeFromURLOptionalParams,
  PermissionCopyModeType,
  ListSharesIncludeType,
  FileRange as RangeModel,
  ShareGetAccessPolicyHeaders,
  ShareItemInternal,
  SignedIdentifier as SignedIdentifierModel,
  SourceModifiedAccessConditions,
  FileForceCloseHandlesHeaders,
  DirectoryForceCloseHandlesHeaders,
  DirectoryDeleteHeaders,
  DirectoryListFilesAndDirectoriesSegmentHeaders,
  DirectoryRenameHeaders,
  DirectoryListHandlesHeaders,
  DirectorySetMetadataHeaders,
  FileAbortCopyHeaders,
  FileDeleteHeaders,
  FilePermissionFormat,
  FileProperty,
  FileListHandlesHeaders,
  FileRenameHeaders,
  CorsRule,
  Metrics,
  ModeCopyMode,
  NfsFileType,
  FileSetMetadataHeaders,
  FileStartCopyHeaders,
  FileUploadRangeFromURLHeaders,
  FileUploadRangeHeaders,
  OwnerCopyMode,
  ServiceGetPropertiesHeaders,
  ListSharesResponse as ListSharesResponseModel,
  RetentionPolicy,
  ServiceListSharesSegmentHeaders,
  ServiceSetPropertiesHeaders,
  ShareCreatePermissionHeaders,
  ShareCreateHeaders,
  ShareCreateSnapshotHeaders,
  ShareDeleteHeaders,
  SharePermission,
  ShareGetPermissionHeaders,
  ShareGetPropertiesHeaders,
  ShareStats,
  ShareGetStatisticsHeaders,
  SharePropertiesInternal,
  ShareSetAccessPolicyHeaders,
  ShareSetMetadataHeaders,
  ShareSetPropertiesHeaders,
  ShareTokenIntent,
  AccessPolicy,
  LeaseAccessConditions,
  LeaseDurationType,
  LeaseStateType,
  LeaseStatusType,
  CopyFileSmbInfo,
  ShareProtocolSettings,
  ShareSmbSettings,
  SmbMultichannel,
  ShareFileRangeList,
  ClearRange,
  ShareAccessTier,
  ShareRootSquash,
} from "./generated/src/models";

export {
  FileDownloadResponse as RawFileDownloadResponse,
  FileSetHttpHeadersHeaders as FileSetHTTPHeadersHeaders,
} from "./models";
/** Known values of {@link ShareTokenIntent} that the service accepts. */
export enum KnownShareTokenIntent {
  Backup = "backup",
}

/**
 * Contains response data for the setQuota operation.
 */
export type ShareSetQuotaResponse = WithResponse<ShareSetQuotaHeaders, ShareSetQuotaHeaders>;

/**
 * Defines headers for setQuota operation.
 */
export type ShareSetQuotaHeaders = ShareSetPropertiesHeaders;

/** A listed file item. */
export interface FileItem {
  name: string;
  fileId?: string;
  /** File properties. */
  properties: FileProperty;
  attributes?: string;
  permissionKey?: string;
}

/** A listed directory item. */
export interface DirectoryItem {
  name: string;
  fileId?: string;
  /** File properties. */
  properties?: FileProperty;
  attributes?: string;
  permissionKey?: string;
}

/** Abstract for entries that can be listed from Directory. */
export interface FilesAndDirectoriesListSegment {
  directoryItems: DirectoryItem[];
  fileItems: FileItem[];
}

/** An enumeration of directories and files. */
export interface ListFilesAndDirectoriesSegmentResponse {
  serviceEndpoint: string;
  shareName: string;
  shareSnapshot?: string;
  directoryPath: string;
  prefix: string;
  marker?: string;
  maxResults?: number;
  /** Abstract for entries that can be listed from Directory. */
  segment: FilesAndDirectoriesListSegment;
  continuationToken: string;
  directoryId?: string;
}

/** Defines values for AccessRight. */
export type ShareFileHandleAccessRights = "Read" | "Write" | "Delete";

/** A listed Azure Storage handle item. */
export interface HandleItem {
  /** XSMB service handle ID */
  handleId: string;
  /** File or directory name including full path starting from share root */
  path: string;
  /** FileId uniquely identifies the file or directory. */
  fileId: string;
  /** ParentId uniquely identifies the parent directory of the object. */
  parentId?: string;
  /** SMB session ID in context of which the file handle was opened */
  sessionId: string;
  /** Client IP that opened the handle */
  clientIp: string;
  /** Name of the client machine where the share is being mounted */
  clientName: string;
  /** Time when the session that previously opened the handle has last been reconnected. (UTC) */
  openTime: Date;
  /** Time handle was last connected to (UTC) */
  lastReconnectTime?: Date;
  accessRightList?: ShareFileHandleAccessRights[];
}

/** An enumeration of handles. */
export interface ListHandlesResponse {
  handleList?: HandleItem[];
  continuationToken: string;
}
